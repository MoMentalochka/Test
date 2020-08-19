import M from 'materialize-css/dist/js/materialize.min'

const Notification = (text, styles) => {

  let style
  switch (styles) {
    case 'Success' :
       style = 'toast-container_success'
      break
    case 'Error' :
       style = 'toast-container_error'
      break
    default : break
  }
 M.toast({html: text, classes: style, inDuration: 500})
}
export default Notification