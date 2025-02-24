import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translation resources
const resources = {
  en: {
    translation: {
      // Navigation
      "Welcome": "Welcome",
      "Home": "Home",
      "Profile": "Profile",
      "Settings": "Settings",
      "Logout": "Logout",
      "Login": "Login",
      "Register": "Register",

      // Hero Section
      "AI-Powered Fitness Revolution": "AI-Powered Fitness Revolution",
      "Your Future Self": "Your Future Self",
      "Starts Today": "Starts Today",
      "Experience the power of AI-driven personal training that adapts to your needs, tracks your progress, and guides you every step of the way.": "Experience the power of AI-driven personal training that adapts to your needs, tracks your progress, and guides you every step of the way.",
      "Your Assistant": "Your Assistant",

      // AI-Powered Features Section
      "AI-Powered Features": "AI-Powered Features",
      "Our cutting-edge AI technology transforms your fitness journey with personalized guidance and real-time adaptations.": "Our cutting-edge AI technology transforms your fitness journey with personalized guidance and real-time adaptations.",
      "Smart Workout Planning": "Smart Workout Planning",
      "Our AI analyzes your fitness level, goals, and preferences to create perfectly tailored workout plans that evolve with you.": "Our AI analyzes your fitness level, goals, and preferences to create perfectly tailored workout plans that evolve with you.",
      "Dynamic exercise selection": "Dynamic exercise selection",
      "Optimal workout timing": "Optimal workout timing",
      "Real-time intensity adjustment": "Real-time intensity adjustment",
      "Explore Features": "Explore Features",
      "Advanced Analytics": "Advanced Analytics",
      "Get detailed insights into your performance with AI-powered analytics that track every aspect of your fitness journey.": "Get detailed insights into your performance with AI-powered analytics that track every aspect of your fitness journey.",
      "Progress visualization": "Progress visualization",
      "Goal tracking & predictions": "Goal tracking & predictions",
      "Health metrics monitoring": "Health metrics monitoring",
      "View Analytics": "View Analytics",
      "24/7 AI Coach": "24/7 AI Coach",
      "Your personal AI coach is always available to provide guidance, answer questions, and keep you motivated.": "Your personal AI coach is always available to provide guidance, answer questions, and keep you motivated.",
      "Form correction & tips": "Form correction & tips",
      "Motivation & reminders": "Motivation & reminders",
      "24/7 instant responses": "24/7 instant responses",
      "Meet Your Coach": "Meet Your Coach",

      // Success Stories Section
      "Success Stories": "Success Stories",
      "See how our AI trainer has transformed the lives of users worldwide.": "See how our AI trainer has transformed the lives of users worldwide.",
      "Sarah M.": "Sarah M.",
      "Fitness Enthusiast": "Fitness Enthusiast",
      "The AI trainer adapts perfectly to my schedule and energy levels. It's like having a personal trainer who knows exactly what I need each day.": "The AI trainer adapts perfectly to my schedule and energy levels. It's like having a personal trainer who knows exactly what I need each day.",
      "James L.": "James L.",
      "Software Developer": "Software Developer",
      "As someone with a busy schedule, having an AI trainer available 24/7 has been game-changing. The personalized workouts are incredibly effective.": "As someone with a busy schedule, having an AI trainer available 24/7 has been game-changing. The personalized workouts are incredibly effective.",
      "Maria R.": "Maria R.",
      "Professional Athlete": "Professional Athlete",
      "The detailed analytics and progress tracking have helped me optimize my training like never before. This is the future of fitness.": "The detailed analytics and progress tracking have helped me optimize my training like never before. This is the future of fitness.",

      // Why Choose AI Training Section
      "Why Choose AI Training?": "Why Choose AI Training?",
      "See how our AI-powered solution compares to traditional training methods.": "See how our AI-powered solution compares to traditional training methods.",
      "Traditional Gym": "Traditional Gym",
      "Fixed schedules": "Fixed schedules",
      "Limited personal attention": "Limited personal attention",
      "Generic workout plans": "Generic workout plans",
      "AI Personal Trainer": "AI Personal Trainer",
      "Available 24/7": "Available 24/7",
      "Constant personalized attention": "Constant personalized attention",
      "Adaptive intelligent planning": "Adaptive intelligent planning",
      "Personal Trainer": "Personal Trainer",
      "High cost per session": "High cost per session",
      "Manual progress tracking": "Manual progress tracking",

      // Call to Action Section
      "Start Your AI Fitness Journey Today": "Start Your AI Fitness Journey Today",
      "Join thousands of users who have transformed their fitness journey with our AI personal trainer. Try it free for 14 days.": "Join thousands of users who have transformed their fitness journey with our AI personal trainer. Try it free for 14 days.",
      "Start Free Trial": "Start Free Trial",
      "Contact Support": "Contact Support",

      // Existing Translations
      "Transform": "Transform",
      "Your Fitness Journey": "Your Fitness Journey",
      "Experience personalized AI-powered workouts": "Experience personalized AI-powered workouts with real-time form correction and progress tracking",
      "Start Training": "Start Training",
      "View Programs": "View Programs",
      "Daily Challenges": "Daily Challenges",
      "Leaderboard": "Leaderboard",
      "Achievements": "Achievements",
      "Progress": "Progress",
      "Statistics": "Statistics",
      "Active Users": "Active Users",
      "Workouts": "Workouts",
      "Success Rate": "Success Rate",
      "Avg. Session": "Avg. Session",
      "Featured Workouts": "Featured Workouts",
      "All Workouts": "All Workouts",
      "Cardio": "Cardio",
      "Strength": "Strength",
      "Yoga": "Yoga",
      "Start Workout": "Start Workout",
      "with": "with",
      "Strength Foundation": "Strength Foundation",
      "Yoga Foundation": "Yoga Foundation",
      "HIIT Cardio Blast": "HIIT Cardio Blast",
      "Save": "Save",
      "Cancel": "Cancel",
      "Delete": "Delete",
      "Edit": "Edit",
      "Update": "Update",
      "Submit": "Submit",
      "Confirm": "Confirm",
      "Loading": "Loading...",
      "Error": "Error",
      "Success": "Success",
      "No Results": "No Results Found",
      "Please Wait": "Please Wait",
      "Email": "Email",
      "Password": "Password",
      "Username": "Username",
      "First Name": "First Name",
      "Last Name": "Last Name",
      "Phone": "Phone Number",
      "What Our Users Say": "What Our Users Say",
      "About Us": "About Us",
      "Quick Links": "Quick Links",
      "Contact Us": "Contact Us",
      "Follow Us": "Follow Us",
      "Privacy Policy": "Privacy Policy",
      "All rights reserved": "All rights reserved",
      "New Message": "New Message",
      "Notification": "Notification",
      "Alert": "Alert"
    }
  },
  zh: {
    translation: {
      // Navigation
      "Welcome": "欢迎",
      "Home": "首页",
      "Profile": "个人资料",
      "Settings": "设置",
      "Logout": "退出",
      "Login": "登录",
      "Register": "注册",

      // Hero Section
      "AI-Powered Fitness Revolution": "AI驱动的健身革命",
      "Your Future Self": "未来的你",
      "Starts Today": "从今天开始",
      "Experience the power of AI-driven personal training that adapts to your needs, tracks your progress, and guides you every step of the way.": "体验由AI驱动的个性化训练，适应您的需求，跟踪您的进度，并在每一步为您提供指导。",
      "Your Assistant": "您的助手",

      // AI-Powered Features Section
      "AI-Powered Features": "AI驱动的功能",
      "Our cutting-edge AI technology transforms your fitness journey with personalized guidance and real-time adaptations.": "我们尖端的AI技术通过个性化指导和实时适应来改变您的健身之旅。",
      "Smart Workout Planning": "智能训练计划",
      "Our AI analyzes your fitness level, goals, and preferences to create perfectly tailored workout plans that evolve with you.": "我们的AI分析您的健身水平、目标和偏好，以创建完全定制的训练计划，并随着您的进步而调整。",
      "Dynamic exercise selection": "动态运动选择",
      "Optimal workout timing": "最佳训练时间",
      "Real-time intensity adjustment": "实时强度调整",
      "Explore Features": "探索功能",
      "Advanced Analytics": "高级分析",
      "Get detailed insights into your performance with AI-powered analytics that track every aspect of your fitness journey.": "通过AI驱动的分析，深入了解您的表现，跟踪您健身之旅的每个方面。",
      "Progress visualization": "进度可视化",
      "Goal tracking & predictions": "目标跟踪与预测",
      "Health metrics monitoring": "健康指标监控",
      "View Analytics": "查看分析",
      "24/7 AI Coach": "24/7 AI教练",
      "Your personal AI coach is always available to provide guidance, answer questions, and keep you motivated.": "您的个人AI教练随时为您提供指导、回答问题并保持您的动力。",
      "Form correction & tips": "姿势纠正与提示",
      "Motivation & reminders": "激励与提醒",
      "24/7 instant responses": "24/7即时响应",
      "Meet Your Coach": "认识您的教练",

      // Success Stories Section
      "Success Stories": "成功故事",
      "See how our AI trainer has transformed the lives of users worldwide.": "看看我们的AI教练如何改变了全球用户的生活。",
      "Sarah M.": "莎拉·M",
      "Fitness Enthusiast": "健身爱好者",
      "The AI trainer adapts perfectly to my schedule and energy levels. It's like having a personal trainer who knows exactly what I need each day.": "AI教练完美适应我的日程和能量水平。就像有一个每天都知道我需求的私人教练。",
      "James L.": "詹姆斯·L",
      "Software Developer": "软件开发人员",
      "As someone with a busy schedule, having an AI trainer available 24/7 has been game-changing. The personalized workouts are incredibly effective.": "作为一个日程繁忙的人，拥有一个24/7可用的AI教练是改变游戏规则的。个性化训练非常有效。",
      "Maria R.": "玛丽亚·R",
      "Professional Athlete": "职业运动员",
      "The detailed analytics and progress tracking have helped me optimize my training like never before. This is the future of fitness.": "详细的分析和进度跟踪帮助我优化了训练，这是前所未有的。这是健身的未来。",

      // Why Choose AI Training Section
      "Why Choose AI Training?": "为什么选择AI训练？",
      "See how our AI-powered solution compares to traditional training methods.": "看看我们的AI驱动解决方案与传统训练方法的比较。",
      "Traditional Gym": "传统健身房",
      "Fixed schedules": "固定时间表",
      "Limited personal attention": "有限的个人关注",
      "Generic workout plans": "通用训练计划",
      "AI Personal Trainer": "AI私人教练",
      "Available 24/7": "24/7可用",
      "Constant personalized attention": "持续的个性化关注",
      "Adaptive intelligent planning": "自适应智能计划",
      "Personal Trainer": "私人教练",
      "High cost per session": "每次课程费用高",
      "Manual progress tracking": "手动进度跟踪",

      // Call to Action Section
      "Start Your AI Fitness Journey Today": "今天开始您的AI健身之旅",
      "Join thousands of users who have transformed their fitness journey with our AI personal trainer. Try it free for 14 days.": "加入成千上万使用我们的AI私人教练改变健身之旅的用户。免费试用14天。",
      "Start Free Trial": "开始免费试用",
      "Contact Support": "联系支持",

      // Existing Translations
      "Transform": "改变",
      "Your Fitness Journey": "您的健身之旅",
      "Experience personalized AI-powered workouts with real-time form correction and progress tracking": "体验由人工智能驱动的个性化训练，实时形态纠正和进度跟踪",
      "Start Training": "开始训练",
      "View Programs": "查看计划",
      "Daily Challenges": "每日挑战",
      "Leaderboard": "排行榜",
      "Achievements": "成就",
      "Progress": "进度",
      "Statistics": "统计",
      "Active Users": "活跃用户",
      "Workouts": "训练课程",
      "Success Rate": "成功率",
      "Avg. Session": "平均课时",
      "Featured Workouts": "精选课程",
      "All Workouts": "所有课程",
      "Cardio": "有氧运动",
      "Strength": "力量训练",
      "Yoga": "瑜伽",
      "Start Workout": "开始训练",
      "with": "与",
      "Strength Foundation": "力量基础",
      "Yoga Foundation": "瑜伽基础",
      "HIIT Cardio Blast": "高强度间歇训练",
      "Save": "保存",
      "Cancel": "取消",
      "Delete": "删除",
      "Edit": "编辑",
      "Update": "更新",
      "Submit": "提交",
      "Confirm": "确认",
      "Loading": "加载中...",
      "Error": "错误",
      "Success": "成功",
      "No Results": "未找到结果",
      "Please Wait": "请稍候",
      "Email": "电子邮箱",
      "Password": "密码",
      "Username": "用户名",
      "First Name": "名",
      "Last Name": "姓",
      "Phone": "电话号码",
      "What Our Users Say": "用户评价",
      "About Us": "关于我们",
      "Quick Links": "快速链接",
      "Contact Us": "联系我们",
      "Follow Us": "关注我们",
      "Privacy Policy": "隐私政策",
      "All rights reserved": "版权所有",
      "New Message": "新消息",
      "Notification": "通知",
      "Alert": "提醒"
    }
  },
  es: {
    translation: {
      // Navigation
      "Welcome": "Bienvenido",
      "Home": "Inicio",
      "Profile": "Perfil",
      "Settings": "Configuración",
      "Logout": "Cerrar Sesión",
      "Login": "Iniciar Sesión",
      "Register": "Registrarse",

      // Hero Section
      "AI-Powered Fitness Revolution": "Revolución Fitness Impulsada por IA",
      "Your Future Self": "Tu Futuro Yo",
      "Starts Today": "Comienza Hoy",
      "Experience the power of AI-driven personal training that adapts to your needs, tracks your progress, and guides you every step of the way.": "Experimenta el poder del entrenamiento personal impulsado por IA que se adapta a tus necesidades, sigue tu progreso y te guía en cada paso.",
      "Your Assistant": "Tu Asistente",

      // AI-Powered Features Section
      "AI-Powered Features": "Funciones Impulsadas por IA",
      "Our cutting-edge AI technology transforms your fitness journey with personalized guidance and real-time adaptations.": "Nuestra tecnología de IA de vanguardia transforma tu viaje de fitness con orientación personalizada y adaptaciones en tiempo real.",
      "Smart Workout Planning": "Planificación Inteligente de Entrenamientos",
      "Our AI analyzes your fitness level, goals, and preferences to create perfectly tailored workout plans that evolve with you.": "Nuestra IA analiza tu nivel de fitness, objetivos y preferencias para crear planes de entrenamiento perfectamente adaptados que evolucionan contigo.",
      "Dynamic exercise selection": "Selección dinámica de ejercicios",
      "Optimal workout timing": "Tiempo óptimo de entrenamiento",
      "Real-time intensity adjustment": "Ajuste de intensidad en tiempo real",
      "Explore Features": "Explorar Funciones",
      "Advanced Analytics": "Análisis Avanzado",
      "Get detailed insights into your performance with AI-powered analytics that track every aspect of your fitness journey.": "Obtén información detallada sobre tu rendimiento con análisis impulsados por IA que rastrean cada aspecto de tu viaje de fitness.",
      "Progress visualization": "Visualización del progreso",
      "Goal tracking & predictions": "Seguimiento y predicciones de objetivos",
      "Health metrics monitoring": "Monitoreo de métricas de salud",
      "View Analytics": "Ver Análisis",
      "24/7 AI Coach": "Entrenador de IA 24/7",
      "Your personal AI coach is always available to provide guidance, answer questions, and keep you motivated.": "Tu entrenador de IA personal siempre está disponible para brindarte orientación, responder preguntas y mantenerte motivado.",
      "Form correction & tips": "Corrección de forma y consejos",
      "Motivation & reminders": "Motivación y recordatorios",
      "24/7 instant responses": "Respuestas instantáneas 24/7",
      "Meet Your Coach": "Conoce a Tu Entrenador",

      // Success Stories Section
      "Success Stories": "Historias de Éxito",
      "See how our AI trainer has transformed the lives of users worldwide.": "Descubre cómo nuestro entrenador de IA ha transformado la vida de usuarios en todo el mundo.",
      "Sarah M.": "Sarah M.",
      "Fitness Enthusiast": "Entusiasta del Fitness",
      "The AI trainer adapts perfectly to my schedule and energy levels. It's like having a personal trainer who knows exactly what I need each day.": "El entrenador de IA se adapta perfectamente a mi horario y niveles de energía. Es como tener un entrenador personal que sabe exactamente lo que necesito cada día.",
      "James L.": "James L.",
      "Software Developer": "Desarrollador de Software",
      "As someone with a busy schedule, having an AI trainer available 24/7 has been game-changing. The personalized workouts are incredibly effective.": "Como alguien con una agenda ocupada, tener un entrenador de IA disponible 24/7 ha sido un cambio radical. Los entrenamientos personalizados son increíblemente efectivos.",
      "Maria R.": "Maria R.",
      "Professional Athlete": "Atleta Profesional",
      "The detailed analytics and progress tracking have helped me optimize my training like never before. This is the future of fitness.": "Los análisis detallados y el seguimiento del progreso me han ayudado a optimizar mi entrenamiento como nunca antes. Este es el futuro del fitness.",

      // Why Choose AI Training Section
      "Why Choose AI Training?": "¿Por Qué Elegir Entrenamiento con IA?",
      "See how our AI-powered solution compares to traditional training methods.": "Descubre cómo nuestra solución impulsada por IA se compara con los métodos de entrenamiento tradicionales.",
      "Traditional Gym": "Gimnasio Tradicional",
      "Fixed schedules": "Horarios fijos",
      "Limited personal attention": "Atención personal limitada",
      "Generic workout plans": "Planes de entrenamiento genéricos",
      "AI Personal Trainer": "Entrenador Personal de IA",
      "Available 24/7": "Disponible 24/7",
      "Constant personalized attention": "Atención personalizada constante",
      "Adaptive intelligent planning": "Planificación inteligente adaptativa",
      "Personal Trainer": "Entrenador Personal",
      "High cost per session": "Alto costo por sesión",
      "Manual progress tracking": "Seguimiento manual del progreso",

      // Call to Action Section
      "Start Your AI Fitness Journey Today": "Comienza Tu Viaje de Fitness con IA Hoy",
      "Join thousands of users who have transformed their fitness journey with our AI personal trainer. Try it free for 14 days.": "Únete a miles de usuarios que han transformado su viaje de fitness con nuestro entrenador personal de IA. Pruébalo gratis durante 14 días.",
      "Start Free Trial": "Comenzar Prueba Gratuita",
      "Contact Support": "Contactar Soporte",

      // Existing Translations
      "Transform": "Transforma",
      "Your Fitness Journey": "Tu Viaje de Fitness",
      "Experience personalized AI-powered workouts": "Experimenta entrenamientos personalizados impulsados por IA con corrección de forma en tiempo real y seguimiento de progreso",
      "Start Training": "Comenzar Entrenamiento",
      "View Programs": "Ver Programas",
      "Daily Challenges": "Desafíos Diarios",
      "Leaderboard": "Tabla de Clasificación",
      "Achievements": "Logros",
      "Progress": "Progreso",
      "Statistics": "Estadísticas",
      "Active Users": "Usuarios Activos",
      "Workouts": "Entrenamientos",
      "Success Rate": "Tasa de Éxito",
      "Avg. Session": "Sesión Promedio",
      "Featured Workouts": "Entrenamientos Destacados",
      "All Workouts": "Todos los Entrenamientos",
      "Cardio": "Cardio",
      "Strength": "Fuerza",
      "Yoga": "Yoga",
      "Start Workout": "Comenzar Entrenamiento",
      "with": "con",
      "Strength Foundation": "Fundamentos de Fuerza",
      "Yoga Foundation": "Fundamentos de Yoga",
      "HIIT Cardio Blast": "Explosión de Cardio HIIT",
      "Save": "Guardar",
      "Cancel": "Cancelar",
      "Delete": "Eliminar",
      "Edit": "Editar",
      "Update": "Actualizar",
      "Submit": "Enviar",
      "Confirm": "Confirmar",
      "Loading": "Cargando...",
      "Error": "Error",
      "Success": "Éxito",
      "No Results": "No Se Encontraron Resultados",
      "Please Wait": "Por Favor Espere",
      "Email": "Correo Electrónico",
      "Password": "Contraseña",
      "Username": "Nombre de Usuario",
      "First Name": "Nombre",
      "Last Name": "Apellido",
      "Phone": "Número de Teléfono",
      "What Our Users Say": "Lo Que Dicen Nuestros Usuarios",
      "About Us": "Sobre Nosotros",
      "Quick Links": "Enlaces Rápidos",
      "Contact Us": "Contáctanos",
      "Follow Us": "Síguenos",
      "Privacy Policy": "Política de Privacidad",
      "All rights reserved": "Todos los derechos reservados",
      "New Message": "Nuevo Mensaje",
      "Notification": "Notificación",
      "Alert": "Alerta"
    }
  },
  fr: {
    translation: {
      // Navigation
      "Welcome": "Bienvenue",
      "Home": "Accueil",
      "Profile": "Profil",
      "Settings": "Paramètres",
      "Logout": "Déconnexion",
      "Login": "Connexion",
      "Register": "S'inscrire",

      // Hero Section
      "AI-Powered Fitness Revolution": "Révolution Fitness Propulsée par l'IA",
      "Your Future Self": "Votre Futur Vous",
      "Starts Today": "Commence Aujourd'hui",
      "Experience the power of AI-driven personal training that adapts to your needs, tracks your progress, and guides you every step of the way.": "Découvrez la puissance de l'entraînement personnel propulsé par l'IA qui s'adapte à vos besoins, suit vos progrès et vous guide à chaque étape.",
      "Your Assistant": "Votre Assistant",

      // AI-Powered Features Section
      "AI-Powered Features": "Fonctionnalités Propulsées par l'IA",
      "Our cutting-edge AI technology transforms your fitness journey with personalized guidance and real-time adaptations.": "Notre technologie de pointe en IA transforme votre parcours de fitness avec des conseils personnalisés et des adaptations en temps réel.",
      "Smart Workout Planning": "Planification Intelligente d'Entraînement",
      "Our AI analyzes your fitness level, goals, and preferences to create perfectly tailored workout plans that evolve with you.": "Notre IA analyse votre niveau de fitness, vos objectifs et vos préférences pour créer des plans d'entraînement parfaitement adaptés qui évoluent avec vous.",
      "Dynamic exercise selection": "Sélection dynamique d'exercices",
      "Optimal workout timing": "Temps d'entraînement optimal",
      "Real-time intensity adjustment": "Ajustement d'intensité en temps réel",
      "Explore Features": "Explorer les Fonctionnalités",
      "Advanced Analytics": "Analyses Avancées",
      "Get detailed insights into your performance with AI-powered analytics that track every aspect of your fitness journey.": "Obtenez des informations détaillées sur vos performances avec des analyses propulsées par l'IA qui suivent chaque aspect de votre parcours de fitness.",
      "Progress visualization": "Visualisation des progrès",
      "Goal tracking & predictions": "Suivi et prédictions des objectifs",
      "Health metrics monitoring": "Surveillance des métriques de santé",
      "View Analytics": "Voir les Analyses",
      "24/7 AI Coach": "Coach IA 24/7",
      "Your personal AI coach is always available to provide guidance, answer questions, and keep you motivated.": "Votre coach IA personnel est toujours disponible pour vous guider, répondre à vos questions et vous motiver.",
      "Form correction & tips": "Correction de forme et conseils",
      "Motivation & reminders": "Motivation et rappels",
      "24/7 instant responses": "Réponses instantanées 24/7",
      "Meet Your Coach": "Rencontrez Votre Coach",

      // Success Stories Section
      "Success Stories": "Histoires de Réussite",
      "See how our AI trainer has transformed the lives of users worldwide.": "Découvrez comment notre coach IA a transformé la vie d'utilisateurs dans le monde entier.",
      "Sarah M.": "Sarah M.",
      "Fitness Enthusiast": "Passionné de Fitness",
      "The AI trainer adapts perfectly to my schedule and energy levels. It's like having a personal trainer who knows exactly what I need each day.": "Le coach IA s'adapte parfaitement à mon emploi du temps et à mes niveaux d'énergie. C'est comme avoir un entraîneur personnel qui sait exactement ce dont j'ai besoin chaque jour.",
      "James L.": "James L.",
      "Software Developer": "Développeur de Logiciels",
      "As someone with a busy schedule, having an AI trainer available 24/7 has been game-changing. The personalized workouts are incredibly effective.": "En tant que personne ayant un emploi du temps chargé, avoir un coach IA disponible 24/7 a été un changement radical. Les entraînements personnalisés sont incroyablement efficaces.",
      "Maria R.": "Maria R.",
      "Professional Athlete": "Athlète Professionnel",
      "The detailed analytics and progress tracking have helped me optimize my training like never before. This is the future of fitness.": "Les analyses détaillées et le suivi des progrès m'ont aidé à optimiser mon entraînement comme jamais auparavant. C'est l'avenir du fitness.",

      // Why Choose AI Training Section
      "Why Choose AI Training?": "Pourquoi Choisir l'Entraînement avec IA ?",
      "See how our AI-powered solution compares to traditional training methods.": "Découvrez comment notre solution propulsée par l'IA se compare aux méthodes d'entraînement traditionnelles.",
      "Traditional Gym": "Salle de Sport Traditionnelle",
      "Fixed schedules": "Horaires fixes",
      "Limited personal attention": "Attention personnelle limitée",
      "Generic workout plans": "Plans d'entraînement génériques",
      "AI Personal Trainer": "Entraîneur Personnel IA",
      "Available 24/7": "Disponible 24/7",
      "Constant personalized attention": "Attention personnalisée constante",
      "Adaptive intelligent planning": "Planification intelligente adaptative",
      "Personal Trainer": "Entraîneur Personnel",
      "High cost per session": "Coût élevé par session",
      "Manual progress tracking": "Suivi manuel des progrès",

      // Call to Action Section
      "Start Your AI Fitness Journey Today": "Commencez Votre Voyage Fitness avec IA Aujourd'hui",
      "Join thousands of users who have transformed their fitness journey with our AI personal trainer. Try it free for 14 days.": "Rejoignez des milliers d'utilisateurs qui ont transformé leur parcours de fitness avec notre entraîneur personnel IA. Essayez-le gratuitement pendant 14 jours.",
      "Start Free Trial": "Commencer l'Essai Gratuit",
      "Contact Support": "Contacter le Support",

      // Existing Translations
      "Transform": "Transformez",
      "Your Fitness Journey": "Votre Parcours Fitness",
      "Experience personalized AI-powered workouts": "Découvrez des entraînements personnalisés propulsés par l'IA avec correction de forme en temps réel et suivi des progrès",
      "Start Training": "Commencer l'Entraînement",
      "View Programs": "Voir les Programmes",
      "Daily Challenges": "Défis Quotidiens",
      "Leaderboard": "Classement",
      "Achievements": "Réalisations",
      "Progress": "Progrès",
      "Statistics": "Statistiques",
      "Active Users": "Utilisateurs Actifs",
      "Workouts": "Entraînements",
      "Success Rate": "Taux de Réussite",
      "Avg. Session": "Session Moyenne",
      "Featured Workouts": "Entraînements en Vedette",
      "All Workouts": "Tous les Entraînements",
      "Cardio": "Cardio",
      "Strength": "Force",
      "Yoga": "Yoga",
      "Start Workout": "Commencer l'Entraînement",
      "with": "avec",
      "Strength Foundation": "Fondamentaux de Force",
      "Yoga Foundation": "Fondamentaux de Yoga",
      "HIIT Cardio Blast": "Explosif Cardio HIIT",
      "Save": "Enregistrer",
      "Cancel": "Annuler",
      "Delete": "Supprimer",
      "Edit": "Modifier",
      "Update": "Mettre à jour",
      "Submit": "Soumettre",
      "Confirm": "Confirmer",
      "Loading": "Chargement...",
      "Error": "Erreur",
      "Success": "Succès",
      "No Results": "Aucun Résultat Trouvé",
      "Please Wait": "Veuillez Patienter",
      "Email": "E-mail",
      "Password": "Mot de passe",
      "Username": "Nom d'utilisateur",
      "First Name": "Prénom",
      "Last Name": "Nom",
      "Phone": "Numéro de téléphone",
      "What Our Users Say": "Ce Que Disent Nos Utilisateurs",
      "About Us": "À Propos de Nous",
      "Quick Links": "Liens Rapides",
      "Contact Us": "Contactez-nous",
      "Follow Us": "Suivez-nous",
      "Privacy Policy": "Politique de Confidentialité",
      "All rights reserved": "Tous droits réservés",
      "New Message": "Nouveau Message",
      "Notification": "Notification",
      "Alert": "Alerte"
    }
  },
  de: {
    translation: {
      // Navigation
      "Welcome": "Willkommen",
      "Home": "Startseite",
      "Profile": "Profil",
      "Settings": "Einstellungen",
      "Logout": "Abmelden",
      "Login": "Anmelden",
      "Register": "Registrieren",
      
      // Features
      "Daily Challenges": "Tägliche Herausforderungen",
      "Leaderboard": "Bestenliste",
      "Achievements": "Erfolge",
      "Progress": "Fortschritt",
      "Statistics": "Statistiken",
      
      // Actions
      "Save": "Speichern",
      "Cancel": "Abbrechen",
      "Delete": "Löschen",
      "Edit": "Bearbeiten",
      "Update": "Aktualisieren",
      "Submit": "Absenden",
      "Confirm": "Bestätigen",
      
      // Messages
      "Loading": "Laden...",
      "Error": "Fehler",
      "Success": "Erfolg",
      "No Results": "Keine Ergebnisse Gefunden",
      "Please Wait": "Bitte Warten",
      
      // Forms
      "Email": "E-Mail",
      "Password": "Passwort",
      "Username": "Benutzername",
      "First Name": "Vorname",
      "Last Name": "Nachname",
      "Phone": "Telefonnummer",
      
      // Notifications
      "New Message": "Neue Nachricht",
      "Notification": "Benachrichtigung",
      "Alert": "Warnung",
      "Transform": "Verwandle",
      "Your Fitness Journey": "Deine Fitness-Reise",
      "Experience personalized AI-powered workouts": "Erlebe personalisierte KI-gesteuerte Workouts mit Echtzeit-Formkorrektur und Fortschrittsverfolgung",
      "Start Training": "Training Starten",
      "View Programs": "Programme Ansehen",
      
      // Stats
      "Active Users": "Aktive Nutzer",
      "Success Rate": "Erfolgsquote",
      "Avg. Session": "Durchschn. Einheit",
      
      // Featured Workouts
      "Featured Workouts": "Empfohlene Workouts",
      "All Workouts": "Alle Workouts",
      "Start Workout": "Workout Starten",
      "with": "mit",
      
      // Workout Types
      "Strength Foundation": "Kraft-Grundlagen",
      "Yoga Foundation": "Yoga-Grundlagen",
      "HIIT Cardio Blast": "HIIT Cardio-Explosion",
      
      // Testimonials
      "What Our Users Say": "Was Unsere Nutzer Sagen",
      "Fitness Enthusiast": "Fitness-Enthusiast",
      "Software Developer": "Softwareentwickler",
      "Professional Athlete": "Profisportler",
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // Default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false // React already does escaping
    },
    // Additional configuration options
    debug: false,
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage', 'cookie']
    },
    react: {
      useSuspense: false
    }
  });

export default i18n;