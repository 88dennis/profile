import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

const initialState = {
  user: "",
  myTransactions: [],
  transactions: [],
  loading: true,
  error: null,
  message: "",
  members: [],
  people: [],
  person: "",
  currentPage: "Transactions",
  sideDrawerOpen: false,
  reminders: [],
  notes: [],
  pageX: 0,
  pageY: 0,

};

//use this for the cleanup function in useEffect
// let isMounted = false;
//context is to pass in data to components instead of using props
export const GlobalContext = createContext(initialState);

export const GlobalContextProvider = ({ children }) => {
  // const [mount, setMount] = useState(false);
  //REDUCER - state management; sets the state using switch
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const dispatcher = (type, payload) => {
    return dispatch({
      type: type,
      payload: payload,
    });
  };

  // console.log(hello)
  // useEffect(() => {
  //   isMounted = true;
  //   if (!mount) {
  //     setMount(true);
  //     async function getUser() {
  //       await axios
  //         .get("/api/user")
  //         .then((response) => {
  //           // console.log(response.data);
  //           if (isMounted) {
  //             dispatch({ type: "FETCH_USER", payload: response.data });
  //           }
  //         })
  //         .catch((error) => {
  //           console.log(error);
  //           if (isMounted) {
  //             dispatch({ type: "FETCH_ERROR" });
  //           }
  //         });
  //     }
  //     getUser();
  //     return () => {
  //       isMounted = false;
  //     };
  //   }
  // }, [mount]);

  const logoutUser = () => {
    axios
      .get("/api/user/logout")
      .then((res) => {
        // console.log(res);
        dispatch({
          type: "LOGOUT_USER",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const loginUser = (loginInfor) => {
    let objVals = Object.values(loginInfor);
    let checker = function (objValsArr) {
      for (let i = 0; i < objValsArr.length; i++) {
        if (objValsArr[i].trim() === "") {
          return false;
        }
      }
      return true;
    };
    // console.log(checker(objVals));

    if (checker(objVals)) {
      axios
        .post("/api/user/login", loginInfor)
        .then((response) => {
          if (response.status === 200) {
            // update the state
            console.log("USER OBJ: ", response);
            dispatch({
              type: "LOGIN_USER",
              payload: response.data,
            });
          } else {
            alert("Check your credentials");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("Complete the Fields");
    }
  };

  const addUser = (userFromSignup) => {
    // console.log(userFromSignup, "USER FROM GLOBAL STATE")
    const {
      userName,
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    } = userFromSignup;

    const userInfo = {
      firstName,
      lastName,
      userName,
      email,
      password,
      confirmPassword,
    };
    const loginInfor = { email, password };
    let objVals = Object.values(userInfo);
    // console.log(objVals);
    let checker = function (objValsArr) {
      for (let i = 0; i < objValsArr.length; i++) {
        if (objValsArr[i].trim() === "") {
          return false;
        }
      }
      return true;
    };

    if (checker(objVals)) {
      if (
        firstName &&
        lastName &&
        userName &&
        email &&
        password &&
        confirmPassword
      ) {
        // console.log(checker(objVals));
        // console.log(userInfo);
        axios.post("/api/user/signup", userInfo).then((response) => {
          if (!response.data.error) {
            console.log("youre good");
            axios
              .post("/api/user/login", loginInfor)
              .then((response) => {
                console.log("USER OBJ: ", response);
                dispatch({
                  type: "SIGNUP_USER",
                  payload: response.data,
                });
              })
              .catch((err) => {
                console.log(err);
              });
          } else {
            console.log(response.data.error);
          }
        });
      }
    } else {
      alert("Complete the Fields");
    }
  };

  //MEMBERS CODE START HERE
  const getMembers = (members) => {
    // console.log(obj[name]);
    dispatch({
      type: "GET_MEMBERS",
      payload: members,
    });
  };
  const removeMember = (id) => {
    dispatch({
      type: "REMOVE_MEMBER",
      payload: id,
    });
  };

  const addMember = (members) => {
    dispatch({
      type: "ADD_MEMBER",
      payload: members,
    });
  };

  const editMember = (members) => {
    dispatch({
      type: "EDIT_MEMBER",
      payload: members,
    });
  };

  //MEMBERS CODE ENDS HERE

  //REMINDERS CODE START HERE
  // const removeReminder = (id) => {
  //   dispatch({
  //     type: "REMOVE_REMINDER",
  //     payload: id,
  //   });
  // };

  const removeReminder = async (reminder) => {
    try {
      const response = await axios.delete(`/api/reminders/${reminder._id}`, {
        withCredentials: true,
      });

      if (response.status === 200) {
        console.log("Deleted reminder: " + reminder._id);
        // setReminders(reminders.filter(r => r._id != reminder._id));
        dispatch({
          type: "REMOVE_REMINDER",
          payload: reminder._id,
        });
      }
    } catch (err) {
      console.log(err.response);
    }
  };

  const sendEmailNow = async (reminder) => {
    // Call API
    try {
      const response = await axios.post(`/api/reminders/${reminder._id}/email`, {
        withCredentials: true
      });
      alert("Email sent!")

    } catch (err) {
      alert("Email failed to send: " + err.message)
      console.log(err) // TODO update this
    }

  };

  const addReminder = (reminder) => {
    dispatch({
      type: "ADD_REMINDER",
      payload: reminder,
    });
  };

  const editReminder = (reminder) => {
    dispatch({
      type: "EDIT_REMINDER",
      payload: reminder,
    });
  };

  //REMINDERS CODE ENDS HERE

  //TRANSACTION CODE STARTS HERE

  async function removeTransaction(transId) {
    try {
      const res = await axios.delete(`/api/transactions/${transId}`);
      if (res.status === 200) {
        dispatch({
          type: "REMOVE_TRANSACTION",
          payload: transId,
        });
      }
    } catch (err) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: err.response.data.error,
      });
    }
  }

  const addTransaction = (transaction) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  };

  const editTransaction = (transaction) => {
    // console.log(transaction, "EDIT TRANSACTION");
    dispatch({
      type: "EDIT_TRANSACTION",
      payload: transaction,
    });
  };

  const editInfoTransaction = (transactions) => {
    // console.log(transactions, "EDIT INFO GLOBAL STATE");
    // console.log(obj[name]);
    dispatch({
      type: "EDIT_INFO_TRANSACTION",
      payload: transactions,
    });
  };

  const getTransactions = (transactions) => {
    // console.log(transactions, "EDIT INFO GLOBAL STATE");
    // console.log(obj[name]);
    dispatch({
      type: "GET_TRANSACTIONS",
      payload: transactions,
    });
  };

  async function getAllTransactions() {
    try {
      const res = await axios.get("/api/transactions");
      const result = await axios.get("/api/people");
      console.log(res);
      if (res && result && res.data && result.data) {
        const updatedTransactions = res.data.map((item) => {
          let borrower = result.data.doc.find(
            (mem) => item.borrowerId === mem._id
          );
          let lender = result.data.doc.find((mem) => item.lenderId === mem._id);

          const object = {
            ...item,
            transId: item._id,
            userId: state.user._id,
            borrowerUserName: borrower.userName,
            borrowerFirstName: borrower.firstName,
            borrowerLastName: borrower.lastName,
            borrowerEmail: borrower.email,
            lenderUserName: lender.userName,
            lenderFirstName: lender.firstName,
            lenderLastName: lender.lastName,
            lenderEmail: lender.email,
            isSettledText: item.isSettled ? "Paid" : "Not Paid",
          };
          return object;
        });

        dispatch({
          type: "GET_TRANSACTIONS",
          payload: updatedTransactions,
        });
        dispatch({
          type: "GET_PEOPLE",
          payload: result.data.doc,
        });
      }
    } catch (error) {
      console.log(error.response);
      console.log(error.response.data);

      dispatch({
        type: "TRANSACTION_ERROR",
        payload: error.response.data.error,
      });
    }
  }

  const getReminders = async (transId) => {
    try {
      const response = await axios.get(
        `/api/transactions/${transId}/reminders`,
        { withCredentials: true }
      );
      // console.log(response)
      dispatch({
        type: "GET_REMINDERS",
        payload: response.data,
      });
    } catch (error) {
      console.log(error.response);
      // dispatch({
      //   type: "TRANSACTION_ERROR",
      //   payload: error.response.data.error,
      // });
    }
  };

  //NOTES CODE STARTS HERE
  const addNote = (note) => {
    dispatch({
      type: "ADD_NOTE",
      payload: note,
    });
  };

  const getNotes = async (transId) => {
    console.log("FROM GET NOTES GLOBAL STATE", transId);
    try {
      const response = await axios.get(`/api/transactions/${transId}/notes`, {
        withCredentials: true,
      });
      dispatch({
        type: "GET_NOTES",
        payload: response.data,
      });
    } catch (error) {
      console.log(error.response);
      // dispatch({
      //   type: "TRANSACTION_ERROR",
      //   payload: error.response.data.error,
      // });
    }
  };

  const editNote = (note) => {
    dispatch({
      type: "EDIT_NOTE",
      payload: note,
    });
  };

  const removeNote = async (note) => {
    try {
      const response = await axios.delete(`/api/notes/${note._id}`, {
        withCredentials: true,
      });

      if (response.status === 200) {
        console.log("Deleted note: " + note._id);
        dispatch({
          type: "REMOVE_NOTE",
          payload: note._id,
        });
      }
    } catch (err) {
      console.log(err.response);
    }
  };
  //NOTES CODE ENDS HERE

  const getPerson = (personUserName) => {
    const curPerson = state.people.find(
      (person) => person.userName === personUserName
    );
    dispatch({
      type: "GET_PERSON",
      payload: curPerson,
    });
    // console.log(curPerson)
  };

  const clearPerson = () => {
    dispatch({
      type: "CLEAR_PERSON",
      payload: "",
    });
  };

  const getPeople = async () => {
    try {
      const res = await axios.get("/api/people");
      dispatch({
        type: "GET_PEOPLE",
        payload: res.data.doc,
      });
    } catch (error) {
      dispatch({
        type: "GET_ERROR",
        payload: error.response.data.error,
      });
    }
  };

  const addPayment = async (paymentDetail) => {
    console.log(paymentDetail);
  };

  //NAV COMPONENT START
  const handlePageChange = (page) => {
    dispatch({ type: "PAGE_CHANGE", payload: page });
  };
  const drawerToggleClickHandler = () => {
    dispatch({ type: "TOGGLE_DRAWER", payload: state.sideDrawerOpen });
  };
  const drawerBackdropClickHandler = () => {
    dispatch({ type: "CLOSE_DRAWER", payload: false });
  };
  //NAV COMPONENT END


  const getPageXY = (x, y)=> {
    console.log(x, y);
    dispatch({
      type: "SET_PAGEXY",
      payload: {x: x, y: y}
    })
  }

  // console.log(state.currentPage, "CURRENT PAGE&&&&&&&&&&&&&&&&&&&&&&&&&&&");
  // console.log(state.members, "hello");
  // console.log(state.reminders, "global state");

  return (
    <GlobalContext.Provider
      value={{
        pageX: state.pageX,
        pageY: state.pageY,
        getPageXY,
        myTransactions: state.myTransactions,
        user: state.user,
        addUser,
        loginUser,
        logoutUser,
        dispatcher,
        members: state.members,
        getMembers,
        removeMember,
        addMember,
        editMember,
        reminders: state.reminders,
        getReminders,
        removeReminder,
        sendEmailNow,
        addReminder,
        editReminder,
        notes: state.notes,
        getNotes,
        addNote,
        editNote,
        removeNote,
        transactions: state.transactions,
        removeTransaction,
        addTransaction,
        editTransaction,
        editInfoTransaction,
        getTransactions,
        getAllTransactions,
        getPeople,
        getPerson,
        people: state.people,
        person: state.person,
        clearPerson,
        currentPage: state.currentPage,
        sideDrawerOpen: state.sideDrawerOpen,
        handlePageChange,
        drawerToggleClickHandler,
        drawerBackdropClickHandler,
        addPayment,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
