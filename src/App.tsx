import BarChart from "./components/BarChart";
import HorMulBarChart from "./components/HorMulBarChart";

import styles from "./App.module.css";
import HorBarWrapper from "./components/HorBar/HorBarWrapper";

function App() {
  return (
    <div className={styles.report}>
      <p className={styles.title}>Отчет за 25.02.22 и 24.02.22</p>
      <div className={styles.charts_wrapper}>
        <HorMulBarChart />
        <BarChart />
        <p>Время работы ККД в пересменки c, мин</p>
        <HorBarWrapper />
      </div>
    </div>
  );
}

export default App;
