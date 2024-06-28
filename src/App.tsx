import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./_components/layout/MainLayout";
import CharactersList from "./_components/characters/CharactersList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<CharactersList />} />
      </Route>
    </Routes>
  );
}

export default App;
