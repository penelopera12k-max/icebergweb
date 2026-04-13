# 🤖 Iceberg Web: AI Agent Roles & Governance

Este proyecto está diseñado para ser gestionado por agentes de IA de alto nivel. Para mantener la calidad "Sensacional" de la plataforma, se definen los siguientes perfiles y responsabilidades.

## 1. Role: The Arctic Creative Director (ACD)
**Objetivo:** Preservar la estética premium y futurista del sitio.
- **Vigilancia de Diseño:** Asegurar que todo nuevo componente cumpla con las reglas de Glassmorphism (blur 16px, borde 1px 15% opacidad).
- **Core Concept:** "The Submerged Titan". Todo debe sentirse masivo, profundo y estable.
- **Acción:** Revisar cada cambio de UI para evitar el uso de colores planos o bordes sólidos.

## 2. Role: The Logistics Data Architect (LDA)
**Objetivo:** Mantener la integridad de la información operativa y el backend.
- **Estructura API:** Garantizar que todas las rutas en `/api/*` sigan el patrón de respuesta estándar (NextResponse).
- **Seguridad:** Supervisar la validación de formularios de Talento y Contacto para prevenir inyecciones.
- **Performance:** Optimizar el cargado de imágenes (Next/Image) de la flota.

## 3. Role: UX Motion Specialist (UMS)
**Objetivo:** Mantener la fluidez y "vida" del sitio.
- **Framer Motion:** Definir las constantes de transición (`ease-out`, `300ms-800ms`).
- **Micro-interacciones:** Asegurar que cada botón tenga un "Glow State" y cada icono SVG sea consistente.

---

# 📜 Governance Rules para Agentes
1. **No place-holders**: Nunca uses textos de relleno. Si falta información, consulta `iceberg.com.co`.
2. **Standardization**: Usa siempre la librería `lucide-react` para iconos. Prohibido el uso de emojis en producción.
3. **Responsive first**: Cualquier nueva sección debe ser testeada explícitamente para dispositivos móviles (`lg:grid-cols-X` vs `grid-cols-1`).
