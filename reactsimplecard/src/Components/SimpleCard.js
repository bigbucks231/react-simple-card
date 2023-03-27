import './Card.css';
import Gold from '../Images/gold.jpg';
import Image from './Image';
import Title from './Title';
import Description from './Description';

const Card = () => {
    return (
        <>
            <div className = 'cardContainer'>
                <div className = 'imageContainer'>
                    <Image thegold = {Gold} />
                </div>
                <div className = 'details'>
                    <div className = 'cardTitle'>
                        <h3><Title title='Gold Avenue' /></h3> 
                    </div>
                    <div className = 'descriptionContainer'>
                        <h3><Description text = 'GOLD AVENUE is the official online reseller of the MKS PAMP GROUP, a Swiss family group with a global reputation. Over the past 60 years, the group has become the leader in the precious metals sector.Let’s build for the long term.'/></h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card