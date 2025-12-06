// src/routes/PublicRoutes.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Public Pages
import LandingPage from '../pages/public/LandingPage/LandingPage';
import Login from '../pages/public/Login/Login';
import SignupChoice from '../pages/public/SignupChoice/SignupChoice';
import SignupUser from '../pages/public/SignupUser/SignupUser';
import SignupClubOwner from '../pages/public/SignupClubOwner/SignupClubOwner';
import Clubs from '../pages/public/Clubs/Clubs';
import ClubDetails from '../pages/public/ClubDetails/ClubDetails';

// Layout Wrapper
import LayoutWrapper from '../Components/layout/LayoutWrapper';

// 404 Page
import NotFound from '../pages/shared/NotFound/NotFound';

const PublicRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={
        <LayoutWrapper showNavbar={true} showFooter={true}>
          <LandingPage />
        </LayoutWrapper>
      } />
      
      <Route path="/clubs" element={
        <LayoutWrapper showNavbar={true} showFooter={true}>
          <Clubs />
        </LayoutWrapper>
      } />
      
      <Route path="/clubs/:clubId" element={
        <LayoutWrapper showNavbar={true} showFooter={true}>
          <ClubDetails />
        </LayoutWrapper>
      } />

      {/* Auth Routes */}
      <Route path="/login" element={
        <LayoutWrapper showNavbar={false} showFooter={false}>
          <Login />
        </LayoutWrapper>
      } />
      
      <Route path="/signup" element={
        <LayoutWrapper showNavbar={false} showFooter={false}>
          <SignupChoice />
        </LayoutWrapper>
      } />
      
      <Route path="/signup/user" element={
        <LayoutWrapper showNavbar={false} showFooter={false}>
          <SignupUser />
        </LayoutWrapper>
      } />
      
      <Route path="/signup/club-owner" element={
        <LayoutWrapper showNavbar={false} showFooter={false}>
          <SignupClubOwner />
        </LayoutWrapper>
      } />

      {/* Redirects */}
      <Route path="/home" element={<Navigate to="/" replace />} />
      <Route path="/index" element={<Navigate to="/" replace />} />

      {/* 404 Page */}
      <Route path="/*" element={
        <LayoutWrapper showNavbar={true} showFooter={true}>
          <NotFound />
        </LayoutWrapper>
      } />
    </Routes>
  );
};

export default PublicRoutes;