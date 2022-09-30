import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import style from './Layout.module.scss'


export function Layout() {
  console.log(style)
  return (
    <>
      <Header />
      <main className={style.main}>
        <Outlet />{/* то где располагаются дочерние элементы / */}
      </main>
      <Footer />
    </>
  );
}
