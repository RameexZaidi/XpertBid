import { signOut, useSession } from "next-auth/react";
import { useState, useEffect, useRef } from "react";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";
import SeoHeader from "./SeoHeader";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";
import WalletBalance from "../components/walletDisplay";
import UserProfile from "../components/UserProfile";
import DesktopCategoriesDropdown from "./DesktopCategoriesDropdown";
import Search from "./Search";
import CategoriesDropdown from "./CategoriesDropdown";
import NotificationDropdown from "./NotificationDropdown";

export default function Header() {
  const { data: session } = useSession();
  const router = useRouter();

  const [activeModal, setActiveModal] = useState(null);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [isUserSettingsOpenDesktop, setUserSettingsOpenDesktop] = useState(false);
  const [isUserSettingsOpenMobile, setUserSettingsOpenMobile] = useState(false);

  const userProfileRefDesktop = useRef(null);
  const userProfileRefMobile = useRef(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("login") === "true") {
      setActiveModal("signin");
    }
  }, [session]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        userProfileRefDesktop.current &&
        !userProfileRefDesktop.current.contains(event.target) &&
        !event.target.closest(".user-profile-setting-desktop")
      ) {
        setUserSettingsOpenDesktop(false);
      }
      if (
        userProfileRefMobile.current &&
        !userProfileRefMobile.current.contains(event.target) &&
        !event.target.closest(".user-profile-setting-mobile")
      ) {
        setUserSettingsOpenMobile(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleOpenModal = (modal) => {
    setActiveModal(modal);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  const handleLogout = async () => {
    try {
      if (session?.user?.token) {
        await axios.post(
          "https://admin.xpertbid.com/api/logout",
          {},
          {
            headers: {
              Authorization: `Bearer ${session.user.token}`,
              Accept: "application/json",
            },
          }
        );
      }
      localStorage.removeItem("nextauth.message");
      sessionStorage.clear();
      document.cookie = "next-auth.session-token=; Max-Age=0; path=/;";
      await signOut({ callbackUrl: "/" });
    } catch (error) {
      console.error("Error during logout:", error);
      await signOut({ callbackUrl: "/" });
    }
  };

  return (
    <>
      <SeoHeader />
      <Search isOpen={isSearchOpen} onClose={() => setSearchOpen(false)} />

      <header>
        <div className="header-inner">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-xl">
              {/* Logo */}
              <Link href="/" className="logo me-auto me-sm-4 mb-2">
                <img src="/assets/images/header-logo.png" alt="Logo" />
              </Link>

              {/* MOBILE logged-in icons */}
              {session && (
                <div className="d-inline d-xl-none ms-sm-auto">
                  <button
                    className="search-icon-btn p-2 py-3 me-2"
                    onClick={() => setSearchOpen(true)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M9.6 17.5c4.4 0 7.9-3.5 7.9-7.9s-3.5-7.9-7.9-7.9-7.9 3.5-7.9 7.9 3.5 7.9 7.9 7.9Z"
                        stroke="#606060"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="m18.3 18.3-1.6-1.6"
                        stroke="#606060"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <NotificationDropdown />
                </div>
              )}

              {/* Hamburger */}
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              {/* Desktop / Expanded Nav */}
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li>
                    <div
                      className="search-trigger"
                      onClick={() => setSearchOpen(true)}
                      onFocus={() => setSearchOpen(true)}
                      tabIndex={0}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M9.6 17.5c4.4 0 7.9-3.5 7.9-7.9s-3.5-7.9-7.9-7.9-7.9 3.5-7.9 7.9 3.5 7.9 7.9 7.9Z"
                          stroke="#606060"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="m18.3 18.3-1.6-1.6"
                          stroke="#606060"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <input
                        type="text"
                        readOnly
                        placeholder="Search auctions"
                        className="search-box"
                      />
                    </div>
                  </li>

                  {/* Categories */}
                  <li className="d-none d-xl-block">
                    <DesktopCategoriesDropdown />
                  </li>
                  <li className="d-block d-xl-none">
                    <CategoriesDropdown />
                  </li>

                  {/* Other static links */}
                  <li>
                    <Link href="/RealEstate" className={router.pathname === "/RealEstate" ? "active nav-link" : "nav-link"}>
                      Real Estate
                    </Link>
                  </li>
                  <li>
                    <Link href="/about_us" className={router.pathname === "/about_us" ? "active nav-link" : "nav-link"}>
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/about-our-partner" className={router.pathname === "/about-our-partner" ? "active nav-link" : "nav-link"}>
                      Directory
                    </Link>
                  </li>
                  <li>
                    <Link href="/Faqs" className={router.pathname === "/Faqs" ? "active nav-link" : "nav-link"}>
                      Faqs
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className={router.pathname === "/contact" ? "active nav-link" : "nav-link"}>
                      Contact
                    </Link>
                  </li>
                </ul>

                {/* Auth / Profile Area */}
                {session ? (
                  <div className="registration-btns-dashboard ms-auto dashboard-menu d-flex align-items-center">
                    <p className="user-amount d-none d-xl-flex">
                      <Link href="/wallet">
                        <span><WalletBalance /></span>
                      </Link>
                    </p>
                    <NotificationDropdown />
                    <div className="user-profile-setting-container d-none d-xl-block">
                      <button className="user-profile-setting" onClick={() => setUserSettingsOpenDesktop(prev => !prev)}>
                        <UserProfile />
                        <i className="fa-solid fa-chevron-down"></i>
                      </button>
                      {isUserSettingsOpenDesktop && (
                        <div className="user-profile-setting-popup" ref={userProfileRefDesktop}>
                          <ul className="user-setting-menu">
                            <li><Link href="/account">Account Settings</Link></li>
                            <li><Link href="/wallet">My Wallet</Link></li>
                            <li><Link href="/favourites">My Favorites</Link></li>
                            <li><Link href="/MyListings">My Listings</Link></li>
                            <li><Link href="/mybid">My Bids</Link></li>
                            <li><Link href="/payment-requests">Payment Requests</Link></li>
                            <li><Link href="/account?tab=identity_verification">Verification</Link></li>
                            <li>
                              <button onClick={handleLogout}>Log Out</button>
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
                    <Link href="/sell" className="sellnow nav-sellnow d-none d-xl-inline">Sell Now</Link>
                  </div>
                ) : (
                  <div className="registration-btns ms-auto">
                    <button className="loginButton me-2" onClick={() => handleOpenModal("signin")}>Login</button>
                    <button className="SignupButton me-2" onClick={() => handleOpenModal("signup")}>Sign Up</button>
                    <Link href="/sell" className="sellnow nav-sellnow">Sell Now</Link>
                  </div>
                )}
              </div>
            </nav>
          </div>
        </div>

        <SignupModal isOpen={activeModal === "signup"} onClose={handleCloseModal} />
        <LoginModal isOpen={activeModal === "signin"} onClose={handleCloseModal} />
      </header>
    </>
  );
}
