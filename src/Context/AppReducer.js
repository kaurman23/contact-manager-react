export default (state, action) => {
    switch(action.type) {
        case 'ADD_CONTACT':
            return ({
                ...state,
                contacts: [ ...state.contacts, action.payload ]
            }
            )
            
        default:
            console.log('here too')
            return state;
    }
}