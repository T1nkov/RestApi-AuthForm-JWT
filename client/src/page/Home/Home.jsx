import Header from '../../Component/Header/Header';
import style from './home.module.css'

function Home() {
    return <>
        <Header />
        <div className={style.wrapper}>
            <div className={style.img}></div>
            <h1>Woohoo!</h1>
            <p>You have successfully logged into the system, and a token has been
                assigned to you. To log out, please click on 'Sign Out'.</p>
        </div>
    </>
}
export default Home;