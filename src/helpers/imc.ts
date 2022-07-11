export type Categories = {
    title: string;
    color: string;
    icon: 'down' | 'up';
    imc: number[];
    yourImc?: number;
};

export const categories: Categories[] = [
    {title: "Magreza", color: '#96A3AB', icon: 'down', imc: [0, 18.5]}, 
    {title: "Normal", color: '#0EAD69', icon: 'up', imc: [18.6, 24.9]}, 
    {title: "Sobrepeso", color: '#E2B039', icon: 'down', imc: [25, 30]}, 
    {title: "Obesidade", color: '#C3423F', icon: 'down', imc: [30.1, 99]}, 
];

export const calculate = (height: number, weight: number) => {
    const imc = weight / (height/100 * height/100);

    for (let i in categories) {
        if (imc >= categories[i].imc[0] && imc < categories[i].imc[1]) {
            categories[i].yourImc = parseFloat(imc.toFixed(2));
            return categories[i];
        };
    };
    return null;
};