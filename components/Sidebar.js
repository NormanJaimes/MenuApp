import Image from 'next/image';
import useQuiosco from '../hooks/useQuiosco';
import Categoria from './Categoria';

export default function Sidebar() {
  const { categorias } = useQuiosco();
  return (
    <>
      <Image
        height={100}
        width={300}
        src={'/assets/img/logo.svg'}
        alt="Imagen Logo"
      />
      <nav className="mt-10">
        {categorias.map((categoria) => (
          <Categoria key={categoria.id} categoria={categoria} />
        ))}
      </nav>
    </>
  );
}
