const getRecipientEmail = (users:object, userLoggedIn:object) => (
  users?.filter(userToFilter => userToFilter !== userLoggedIn.email)
)

export default getRecipientEmail;