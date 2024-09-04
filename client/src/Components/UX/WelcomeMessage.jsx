import PropTypes from 'prop-types'
import styles from './WelcomeMessage.module.css'
const { welcomeText } =styles

const WelcomeMessage = ({namePeople}) => <h2 className={welcomeText}>Bienvenue {namePeople}</h2>

WelcomeMessage.propTypes={
    namePeople: PropTypes.string.isRequired
}
export default WelcomeMessage