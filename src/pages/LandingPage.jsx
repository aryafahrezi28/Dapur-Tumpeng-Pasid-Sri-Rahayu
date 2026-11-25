import React, { useState } from "react";
import {
  catalogProducts,
  initialTestimonialsData,
} from "../data/cateringData";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import MenuCatalog from "../components/MenuCatalog";
import CustomTumpeng from "../components/CustomTumpeng";
import ScheduleCalendar from "../components/ScheduleCalendar";
import HowToOrder from "../components/HowToOrder";
import TestimonialsSlider from "../components/TestimonialsSlider";
import Footer from "../components/Footer";
import AuthModal from "../components/AuthModal";
import CartDrawer from "../components/CartDrawer";
import {
  InvoiceModal,
  RatingModal,
} from "../components/InvoiceAndRatingModals";

export default function LandingPage() {
  const defaultEventDate = (() => {
    const d = new Date();
    d.setDate(d.getDate() + 3);
    return d.toISOString().split("T")[0];
  })();

  const [currentUser, setCurrentUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [eventDate, setEventDate] = useState(defaultEventDate);
  const [activeOrder, setActiveOrder] = useState(null);
  const [testimonials, setTestimonials] = useState(initialTestimonialsData);

  const [isVerifOpen, setIsVerifOpen] = useState(false);
  const [redirectBackToCart, setRedirectBackToCart] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isInvoiceOpen, setIsInvoiceOpen] = useState(false);
  const [ratingModalOrderCode, setRatingModalOrderCode] = useState(null);

  const [toasts, setToasts] = useState([]);

  const showToast = (message) => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3200);
  };

  const handleOpenVerification = (fromCheckout = false) => {
    setRedirectBackToCart(fromCheckout);
    setIsVerifOpen(true);
  };

  const handleVerified = (userObj) => {
    setCurrentUser(userObj);
    setIsVerifOpen(false);
    showToast(`Nomor WhatsApp ${userObj.phone} berhasil terverifikasi!`);
    if (redirectBackToCart) {
      setRedirectBackToCart(false);
      setIsCartOpen(true);
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    showToast("Anda telah keluar dari akun.");
  };

  const handleAddToCart = (productId) => {
    const product = catalogProducts.find((p) => p.id === productId);
    if (!product) return;

    setCart((prev) => {
      const idx = prev.findIndex((i) => i.id === productId);
      if (idx > -1) {
        const updated = [...prev];
        updated[idx] = { ...updated[idx], qty: updated[idx].qty + 1 };
        return updated;
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          details: product.portions,
          price: product.price,
          qty: 1,
        },
      ];
    });
    showToast(`"${product.name}" ditambahkan ke keranjang.`);
  };

  const handleAddCustomToCart = (customItem) => {
    setCart((prev) => [...prev, customItem]);
    showToast("Custom Tumpeng berhasil dimasukkan ke keranjang!");
  };

  const handleUpdateQty = (index, delta) => {
    setCart((prev) => {
      const updated = [...prev];
      const nextQty = updated[index].qty + delta;
      if (nextQty <= 0) {
        updated.splice(index, 1);
      } else {
        updated[index] = { ...updated[index], qty: nextQty };
      }
      return updated;
    });
  };

  const handleSubmitNewOrder = (newOrder) => {
    setActiveOrder(newOrder);
    setCart([]);
    setIsCartOpen(false);
    setIsInvoiceOpen(true);
    window.open(newOrder.waUrl, "_blank", "noopener,noreferrer");
  };

  const handleSimulateCompleted = () => {
    setActiveOrder((prev) => (prev ? { ...prev, status: "Selesai" } : null));
    if (activeOrder) {
      showToast(
        `Pesanan ${activeOrder.code} selesai! Anda dapat memberi ulasan jika berkenan.`
      );
    }
  };

  const handleSubmitRating = ({ stars, occasion, comment }) => {
    setActiveOrder((prev) => (prev ? { ...prev, reviewed: true } : null));
    setTestimonials((prev) => [
      {
        id: "rev-" + Date.now(),
        name: currentUser ? currentUser.name : "Pelanggan Dapur Sri Rahayu",
        occasion,
        stars,
        comment,
      },
      ...prev,
    ]);
    setRatingModalOrderCode(null);
    showToast("Terima kasih! Ulasan Anda langsung tampil di slider halaman depan.");
  };

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <>
      {/* Toast Notification Container */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2 pointer-events-none max-w-sm">
        {toasts.map((t) => (
          <div
            key={t.id}
            className="bg-sage text-ivory px-5 py-3 rounded-2xl shadow-xl text-xs sm:text-sm font-medium flex items-center gap-2.5 pointer-events-auto border border-ivory/10"
          >
            <i className="fa-solid fa-circle-check text-gold-light"></i>
            <span>{t.message}</span>
          </div>
        ))}
      </div>

      <Navbar
        currentUser={currentUser}
        cartCount={cartCount}
        onOpenVerification={handleOpenVerification}
        onOpenCart={() => setIsCartOpen(true)}
        onLogout={handleLogout}
      />

      <main>
        <Hero />
        <MenuCatalog onAddToCart={handleAddToCart} />
        <CustomTumpeng
          onAddCustomToCart={handleAddCustomToCart}
          onToast={showToast}
        />
        <ScheduleCalendar
          onSelectEventDate={setEventDate}
          onToast={showToast}
        />
        <HowToOrder />
        <TestimonialsSlider testimonials={testimonials} />
      </main>

      <Footer />

      <AuthModal
        isOpen={isVerifOpen}
        onClose={() => setIsVerifOpen(false)}
        onVerified={handleVerified}
        onToast={showToast}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQty={handleUpdateQty}
        currentUser={currentUser}
        eventDate={eventDate}
        onChangeEventDate={setEventDate}
        activeOrder={activeOrder}
        onRequireVerification={() => {
          setIsCartOpen(false);
          showToast("Silakan verifikasi nomor WhatsApp Anda terlebih dahulu.");
          handleOpenVerification(true);
        }}
        onSubmitNewOrder={handleSubmitNewOrder}
        onSimulateCompleted={handleSimulateCompleted}
        onOpenRatingModal={(code) => setRatingModalOrderCode(code)}
      />

      <InvoiceModal
        order={activeOrder}
        isOpen={isInvoiceOpen}
        onClose={() => setIsInvoiceOpen(false)}
        onViewOrderStatus={() => {
          setIsInvoiceOpen(false);
          setIsCartOpen(true);
        }}
      />

      <RatingModal
        isOpen={Boolean(ratingModalOrderCode)}
        orderCode={ratingModalOrderCode}
        defaultOccasion={currentUser?.occasion}
        onClose={() => setRatingModalOrderCode(null)}
        onSubmitRating={handleSubmitRating}
      />
    </>
  );
}