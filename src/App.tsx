import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./_components/layout/MainLayout";
import CharactersList from "./_components/characters/CharactersList";
import { Profile } from "./_components/profile/Profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<CharactersList />} />
        <Route path="profile/:id" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;
