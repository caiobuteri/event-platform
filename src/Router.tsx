import { ApolloProvider } from "@apollo/client";
import { Route, Routes } from "react-router-dom";
import { client } from "./lib/apollo";
import { Event } from "./pages/Event";

export const Router = () => {
  return (
      <Routes>
        <Route path="/" element={<Event />}  />
        <Route path="/event" element={<Event />} />
        <Route path="/event/lesson/:slug" element={<Event />} />
      </Routes>
  )
}
