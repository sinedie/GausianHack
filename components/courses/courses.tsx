export default function Courses() {
  return (
    <div className="courses-container">
      <div className="course">
        <div className="course-image">
          <img src="course1.jpg" width={300} />
        </div>
        <div className="course-info">
          <h3 className="course-title">
            Inteligencia Financiera: Guía completa Finanzas Personales
          </h3>
          <p className="course-description">
            Este curso está disponible en Udemy y te enseña cómo multiplicar tu
            capital, hacer las mejores inversiones para tu capital, construir
            capital comenzando con la mejor técnica de ahorro, tomar
            financiamiento para lograr negocios, aprovechar el dinero de otros
            para hacer crecer tus bienes...
          </p>
        </div>
      </div>

      <div className="course">
        <div className="course-image">
          <img src="course2.jpg" width={300} />
        </div>
        <div className="course-info">
          <h3 className="course-title">
            Microsoft Power BI para los Departamentos Contable y Financiero de
            la Empresa
          </h3>
          <p className="course-description">
            Este curso es ofrecido por CEF.- Masters, Cursos, Oposiciones y
            Libros Telepresencia y proporciona capacitación práctica en análisis
            de datos para la gestión económica y financiera de las empresas
            utilizando Microsoft Power BI.
          </p>
        </div>
      </div>

      <div className="course">
        <div className="course-image">
          <img src="course3.png" width={300} />
        </div>
        <div className="course-info">
          <h3 className="course-title">
            Coaching en Educación Financiera e Inteligencia Financiera
          </h3>
          <p className="course-description">
            Este curso está disponible en Udemy y te enseña a desarrollar tu
            inteligencia financiera o IQ financiero en base a la educación
            financiera. Aprenderás las bases de la contabilidad, finanzas,
            inversiones, economía, derecho y administración. Aprenderás a
            construir tu camino hacia la verdadera “Libertad, Independencia y
            Equilibrio Financiero”.
          </p>
        </div>
      </div>
    </div>
  );
}
