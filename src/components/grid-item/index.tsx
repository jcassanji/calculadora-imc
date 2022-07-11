import { Categories } from "../../helpers/imc";
import styles from './grid.module.css';
import upImg from '../../assets/up.png';
import downImg from '../../assets/down.png';

type Props = {
    item: Categories
};

export const GridItem = ({item} : Props) => {
    return (
        <div className = {styles.main} style={{backgroundColor: item.color}}>
            <div className = {styles.gridIcon}>
                {item.icon === 'up' ? <img src = {upImg} alt = "" width= "30"></img> : <img src = {downImg} alt = "" width= "30"></img>}
            </div>
            <div className = {styles.gridTitle}>{item.title}</div>
            {item.yourImc && 
                <div className = {styles.yourImc}> Seu IMC é de {item.yourImc} kg/m²</div>
            }
            <div className = {styles.gridInfo}>
                <>
                    IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
                </>
            </div>
        </div>
    )
}