export class SomaService {

    public static somar(numero1: number, numero2: number): number {
        console.log(numero1 + numero2);

        // // erro test unitário
        const resultado = Math.ceil( numero1 + numero2);

        // // Bug sonar
        let i = 0;
        i++;

        // // const resultado = numero1 + numero2;
        return resultado;
    }
}
