import { SomaComponent } from './soma.component';
import { SomaService } from './somaService';

describe('Teste de soma', function () {
    it('Soma sem arredondamentos', function () {
        const primeiroNumero = 12.23243;
        const segundoNumero = 12.544343;

        const resultadoEsperado = 24.776773;

        expect(resultadoEsperado).toEqual(SomaService.somar(primeiroNumero, segundoNumero));
    });
});
