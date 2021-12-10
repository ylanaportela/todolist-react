import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import Menu from "../../components/Menu/Menu"
import Header from "../../components/Header/Header"
import Footer from '../../components/Footer/Footer';
import '../Calendario/calendar.css'
import ImageCalendar from '../../assets/calendar.svg'


const Calendario = () => {
    return (
        <>

            <Menu />
            <Header />

            <section>

                <header>
                    <h2>Calendário</h2>
                </header>

                <div className='container-calendar'>
                    <Calendar className='calendar'/>
                    <img className='image-calendar' src={ImageCalendar} alt='Ilustration about calendar'/>
                </div>

            </section>

            <Footer />
            
        </>
    )
}

export default Calendario 