import { Dashboard } from "@/routes";
import globalStyles from "./../assets/css/global.module.scss";

export default function Home() {
  return (
    <main className={globalStyles.main}>
      <Dashboard />
    </main>
  );
}
