import { useRouter } from 'next/router';
import useQuiosco from '../hooks/useQuiosco';

const pasos = [
  { paso: 1, nombre: 'Menú', url: '/' },
  { paso: 2, nombre: 'Resumen', url: '/resumen' },
  { paso: 3, nombre: 'Datos y Total', url: '/total' },
];

export default function Pasos() {
  const { handleChangePaso, paso } = useQuiosco();
  const router = useRouter();
  const calcularProgreso = () => {
    let valor;
    if (paso === 1) {
      valor = 2;
    } else if (paso === 2) {
      valor = 50;
    } else {
      valor = 100;
    }
    return valor;
  };

  function getRuta() {
    switch (router.pathname) {
      case '/':
        return 1;
      case '/resumen':
        return 50;
      case '/total':
        return 100;
    }
  }

  console.log(getRuta());
  return (
    <>
      <div className="flex justify-between mb-5">
        {pasos.map((paso) => (
          <button
            type="button"
            key={paso.paso}
            className="text-2xl font-bold"
            onClick={() => {
              router.push(paso.url);
              handleChangePaso(paso.paso);
            }}
          >
            {paso.nombre}
          </button>
        ))}
      </div>
      <div className="bg-gray-100 mb-10">
        <div
          className={`rounded-full uppercase bg-amber-500 text-xs leading-none h-2 text-center text-white w-${getRuta()}/3`}
        ></div>
      </div>
    </>
  );
}
