
import { useState } from 'react';
import styles from './App.module.css';
import logo from './assets/powered.png';
import { Categories, calculate, categories } from './helpers/imc';
import { GridItem } from './components/grid-item';
import arrowImg from './assets/leftarrow.png';

const App = () => {

    const [heightField, setHeightField] = useState<number>(0);
    const [weightField, setWeightField] = useState<number>(0);
    const [toShow, setToShow] = useState<Categories | null>(null); 

    const handleCalculateButton = () => {
        if (heightField && weightField) {
            setToShow(calculate(heightField, weightField));
        } else {
            alert("Preencha todos os campos corretamente!");
        }
    }

    const handleBackButton = () => {
        setToShow(null);
        setHeightField(0);
        setWeightField(0);
    }

    return(
        <div className={styles.main}>
            <header>
                <div className={styles.headerContainer}>
                    <img src={logo} alt="Logo powered by B7web" width={150}/>
                </div>
            </header>
            <div className={styles.container}>
                <div className={styles.leftside}>
                    <h1>Calcule seu IMC</h1>
                    <p>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.</p>

                    <input type="number" placeholder="Digite a sua altura. Ex: 170 (em centímetros)" value={heightField > 0 ? heightField : ''} onChange={e => setHeightField(parseFloat(e.target.value))} disabled = {toShow ? true: false}/>
                    <input type="number" placeholder="Digite o seu peso. Ex: 70 (em kg)" step="0.1" value={weightField > 0 ? weightField : ''} onChange={e => setWeightField(parseFloat(e.target.value))} disabled = {toShow ? true: false} />

                    <button onClick={handleCalculateButton} disabled = {toShow ? true: false}>Calcular</button>

                </div>
                <div className={styles.rightside}>
                    {!toShow &&
                        <div className={styles.grid}>
                            {categories.map((item, key) =>(
                                <GridItem key = {key} item = {item}/>
                            ))}
                        </div>
                    }
                    {toShow &&
                        <div className = {styles.rightBig}> 
                            <div className = {styles.rightArrow} onClick={handleBackButton}>
                                <img src={arrowImg} alt="" width = {25}/>
                            </div>
                            <GridItem item = {toShow}/>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default App;