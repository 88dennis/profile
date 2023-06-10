const AppReducer =  (state, action) => {
  // console.log(action, "ACTIONS FROM AppReducer.js");
  // console.log(state, "STATE FROM AppReducer.js");

  switch (action.type) {
    case "LOGOUT_USER":
      return {
        state,
      };
    case "LOGIN_USER":
      //"" || false is falsy
      //if action.payload === "" the statement below will be falsy
      return {
        ...state,
        user: action.payload || false,
      };

    case "SIGNUP_USER":
      //"" || false is falsy
      //if action.payload === "" the statement below will be falsy
      return {
        ...state,
        user: action.payload || false,
      };

    case "FETCH_USER":
      //"" || false is falsy
      //if action.payload === "" the statement below will be falsy
      return {
        ...state,
        user: action.payload || false,
      };

    case "FETCH_TRANSACTIONS":
      return {
        ...state,
        myTransactions: action.payload,
      };

    case "UPDATE_TRANSACTIONS":
      return {
        ...state,
        myTransactions: action.payload,
      };

    case "FETCH_ERROR":
      // console.log(state, "FROM SWITCH")
      return {
        loading: true,
        message: action.payload,
      };

      case "ADD_NOTE":
        return {
          ...state,
          notes: [...state.notes, action.payload],
        };

      case "GET_NOTES":
        return {
          ...state,
          notes: action.payload,
        };



        case "EDIT_NOTE":
          const updatedNote = action.payload;
    
          const updatedNotes = state.notes.map((note) => {
            if (note._id === updatedNote._id) {
              return updatedNote;
            }
            return note;
          });
    
    
          return {
            ...state,
            notes: updatedNotes,
          };


          case "REMOVE_NOTE":
            const newNotes = state.notes.filter(
              (note) => note._id !== action.payload
            );
            return {
              ...state,
              notes: newNotes
            };

    case "GET_REMINDERS":
      return {
        ...state,
        reminders: action.payload,
      };

    case "REMOVE_REMINDER":
      const newReminders = state.reminders.filter(
        (reminder) => reminder._id !== action.payload
      );
      return {
        ...state,
        reminders: newReminders
      };
    case "ADD_REMINDER":
      return {
        ...state,
        reminders: [...state.reminders, action.payload],
        // reminders: action.payload.concat(state.reminders)
      };
    case "EDIT_REMINDER":
      const updatedReminder = action.payload;

      const updatedReminders = state.reminders.map((reminder) => {
        if (reminder._id === updatedReminder._id) {
          return updatedReminder;
        }
        return reminder;
      });


      return {
        ...state,
        reminders: updatedReminders,
      };

    case "GET_MEMBERS":
      return {
        ...state,
        members: action.payload,
      };

    case "REMOVE_MEMBER":
      return {
        ...state,
        members: state.members.filter((member) => member.id !== action.payload),
      };
    case "ADD_MEMBER":
      return {
        ...state,
        members: [...state.members, action.payload],
        // members: action.payload.concat(state.members)
      };
    case "EDIT_MEMBER":
      const updatedMember = action.payload;

      const updatedMembers = state.members.map((member) => {
        if (member.id === updatedMember.id) {
          return updatedMember;
        }
        return member;
      });

      return {
        ...state,
        members: updatedMembers,
      };

    case "EDIT_INFO_TRANSACTION":
      return {
        ...state,
        transactions: action.payload,
      };

    case "ADD_TRANSACTION":
      // console.log("ADDED TRANSACTION PAYLOAD : ", action.payload);
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
        // members: action.payload.concat(state.members)
      };
    case "GET_TRANSACTIONS":
      return {
        ...state,
        transactions: action.payload,
      };

    case "REMOVE_TRANSACTION":
      // console.log(state.transactions, "HELLLASDLSLDLSAD REMOVE");
      // return state;
      const newTransactions = state.transactions.filter(
        (tran) => tran._id !== action.payload
      )
      return {
        ...state,
        transactions: newTransactions
      };

    case "TRANSACTION_ERROR":
      return {
        ...state,
        error: action.payload,
      };
      case "GET_PERSON":
        return {
          ...state,
          person: action.payload,
        };

        case "CLEAR_PERSON":
          return {
            ...state,
            person: action.payload,
          };
    case "GET_PEOPLE":
      return {
        ...state,
        people: action.payload,
      };

      

    case "PAGE_CHANGE":
      return {
        ...state,
        currentPage: action.payload,
        sideDrawerOpen: false,
      };

    case "TOGGLE_DRAWER":
      return {
        ...state,
        sideDrawerOpen: !action.payload,
      };

    case "CLOSE_DRAWER":
      return {
        ...state,
        sideDrawerOpen: action.payload,
      };

      case "SET_PAGEXY":

      // console.log(action.payload)

      const {
        x,
        y
      } = action.payload

      // console.log(x, y)

      let newY;

      if (y > 450) {
        newY = y-450;
      } else {
        newY = y;
      }
        return {
          ...state,
          pageX: x,
          pageY: newY,

        };

    default:
      return state;
  }
};


export default AppReducer;