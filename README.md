# 💡 Gadget Zone – E-Commerce Gadget Store

**Gadget Zone** is a modern **Next.js e-commerce web application** where users can browse, explore, and view details the latest and all gadgets.  
It features a clean interface, responsive design, and interactive animations.

🧩 **Stack:** Next.js • React.js • Express.js • Tailwind CSS • MongoDB • Firebase Auth  

---

## 🚀 Live Links  
🔗 **Live Website (Vercel):** [https://gadget-zone-client.vercel.app/](https://gadget-zone-client.vercel.app/)  
🔗 **Client Repository:** [https://github.com/sm-remal/gadget-zone-client](https://github.com/sm-remal/gadget-zone-client)  
🔗 **Server Repository:** [https://github.com/sm-remal/gadget-zone-server](https://github.com/sm-remal/gadget-zone-server)

---

## ✨ Key Features  

**🛒 Browse Latest Products** – Users can explore all gadgets with search.  
**📄 Product Details** – Detailed view including image, short/long descriptions, specifications, availability, and rating.  
**🔒 Firebase Authentication** – Email/password login and Google Sign-In.  
**⚙️ CRUD Functionalities** – Admin can add, update, or delete products in MongoDB.  
**📱 Fully Responsive UI** – Works perfectly on mobile, tablet, and desktop screens.  
**🎨 Smooth Animations** – Framer Motion and interactive sliders for modern feel.  
**🌈 Modern Design Theme** – Elegant colors, hover effects, and gradients.

---

## 🖥️ Pages & Routes  

| Page | Type | Description |
|------|------|-------------|
| **Home (`/`)** | Public | Banner, Latest Products, Mega Deals, Reviews, WhyChooseUs |
| **All Products (`/all-products`)** | Public | Displays all products with search |
| **Add Product (`/add-product`)** | Private | Admin can add a new product |
| **Manage Products (`/manage-products`)** | Private | Admin can update or delete products |
| **Product Details (`/product-details/[id]`)** | Public | Detailed info about a single product |
| **Login (`/login`)** | Public | Authentication with Firebase |
| **Registration (`/registration`)** | Public | Sign up for new users |
| **My Profile (`/my-profile`)** | Private | User profile info and settings |
| **Contact (`/contact`)** | Public | Contact form and info |
| **404 Page** | Public | Custom not-found page |

---

## 🎨 Frontend Technologies  

| Category | Technologies Used |
|-----------|------------------|
| **Framework** | Next.js 16, React 19 |
| **Styling** | Tailwind CSS, DaisyUI |
| **Animations** | Framer Motion, Swiper.js |
| **UI Elements** | Lucide React Icons, React Icons |
| **Text Effects** | React Simple Typewriter |
| **Notifications** | React Hot Toast, SweetAlert2 |
| **Forms** | React Hook Form |
| **Loading / Spinner** | React Spinners, NProgress |
| **Data Handling** | Axios |
| **Authentication** | Firebase Auth |

---

## ⚙️ Backend / Database  

| Category | Technologies Used |
|-----------|------------------|
| **Server Runtime** | Node.js, Express.js |
| **Database** | MongoDB Atlas |
| **Authentication** | Firebase Auth |
| **Environment Variables** | .env |
| **CORS** | Enabled via `cors` package |
| **Deployment** | Vercel |

---


## 🗄️ Database Structure  

### 📘 `products` Collection Example  
```json
{
  "product_title": "Apple MacBook Air M2",
  "product_image": "https://i.pinimg.com/1200x/9a/e8/61/9ae861087421b33e3a8bf71553f817d9.jpg",
  "category": "Laptop",
  "price": 116000,
  "short_description": "Ultra-slim MacBook Air with M2 chip, perfect for work and creativity.",
  "long_description": "The Apple MacBook Air M2 is designed for professionals and students seeking high performance and portability.",
  "specification": ["8GB RAM", "256GB SSD", "M2 Chip", "13.6-inch Retina Display"],
  "availability": true,
  "rating": 4.91,
  "createdAt": "25/11/2025"
}
```

---

## 📁 Project Structure  

```bash
src/
 ┣ app/
 ┃ ┣ about/
 ┃ ┣ add-product/
 ┃ ┣ all-products/
 ┃ ┣ contact/
 ┃ ┣ login/
 ┃ ┣ manage-products/
 ┃ ┣ my-profile/
 ┃ ┣ product-details/[id]/
 ┃ ┣ registration/
 ┃ ┣ favicon.ico
 ┃ ┣ globals.css
 ┃ ┣ layout.jsx
 ┃ ┣ not-found.jsx
 ┃ ┗ page.jsx
 ┣ components/
 ┃ ┣ Banner/
 ┃ ┣ ErrorDetailsPage/
 ┃ ┣ Footer/
 ┃ ┣ LatestProducts/
 ┃ ┣ Loading/
 ┃ ┣ MegaDeal/
 ┃ ┣ Navbar/
 ┃ ┣ Reviews/
 ┃ ┣ WhyChooseUs/
 ┃ ┗ AuthProviderWrapper.jsx
 ┣ contexts/
 ┃ ┗ AuthContext.jsx
```

---

## 🌐 Deployment  

| Part | Platform |
|------|-----------|
| **Frontend** | Vercel |
| **Backend / API** | Vercel  |
| **Database** | MongoDB Atlas |

---

## 🪄 Acknowledgments  

- [Next.js](https://nextjs.org/)  
- [Tailwind CSS](https://tailwindcss.com)  
- [DaisyUI](https://daisyui.com)  
- [Framer Motion](https://www.framer.com/motion/)  
- [Swiper.js](https://swiperjs.com/)  
- [Lucide Icons](https://lucide.dev)  
- [MongoDB](https://www.mongodb.com/)  
- [Firebase](https://firebase.google.com/)  

---

> 💖 *Gadget Zone – Modern, Responsive & Interactive Gadget Shopping Experience.*

