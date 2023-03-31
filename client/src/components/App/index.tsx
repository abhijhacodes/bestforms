import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage, PageNotFound, LoginPage, ProfilePage } from "../Pages";
export const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/profile" element={<ProfilePage/>} />
        <Route path="/forms/:formId" element={<h1>Your form page</h1>} />
        <Route path="/dashboard/*">
          <Route path="forms" element={<h1>list of your forms</h1>} />
          <Route
            path="forms/:formId"
            element={<h1>Details filled in your form</h1>}
          />
          <Route path="create" element={<h1>Create a new form</h1>} />
          <Route path="review" element={<h1>Review your new form</h1>} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
