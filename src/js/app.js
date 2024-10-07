// Import React and ReactDOM
import React from 'react';
import { createRoot } from 'react-dom/client';

// Import Framework7
import Framework7 from 'framework7/lite-bundle';

// Import Framework7-React Plugin
import Framework7React from 'framework7-react';

// Import Framework7 Styles
//كذا راح يتم عرض عناصر صفحة من اليسار الى اليمين
import 'framework7/css/bundle';
//من خلال الكود الموجود في تعليق تستطيع من خلاله عرض عناصر صفحة من اليمين الى اليسار
//import 'framework7/css/bundle/rtl';
// Import Icons and App Custom Styles
import '../css/icons.css';
import '../css/app.less';

// Import App Component
import App from '../components/app.jsx';

// Init F7 React Plugin
Framework7.use(Framework7React)

// Mount React App
const root = createRoot(document.getElementById('app'));
root.render(React.createElement(App));