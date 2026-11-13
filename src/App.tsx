import './styles/foundations/_colors.scss'
import './styles/foundations/_spacing.scss'
import './styles/foundations/_typography.scss'
import './App.css'

const brandColors = [
  { name: 'Merlot Fields', value: '#6b212c', className: 'merlot-fields' },
  {
    name: 'Anti-Flash White',
    value: '#f3f3f3',
    className: 'anti-flash-white',
  },
  { name: 'Underground', value: '#685652', className: 'underground' },
  { name: 'Deep Forest', value: '#34443a', className: 'deep-forest' },
] as const

const spacingValues = [
  { token: '--spacing-100', value: '4px', className: 'spacing-100' },
  { token: '--spacing-200', value: '8px', className: 'spacing-200' },
  { token: '--spacing-400', value: '16px', className: 'spacing-400' },
  { token: '--spacing-500', value: '20px', className: 'spacing-500' },
  { token: '--spacing-600', value: '24px', className: 'spacing-600' },
  { token: '--spacing-800', value: '32px', className: 'spacing-800' },
  { token: '--spacing-1200', value: '48px', className: 'spacing-1200' },
  { token: '--spacing-1600', value: '64px', className: 'spacing-1600' },
] as const

function App() {
  return (
    <main className="foundation-test">
      <header className="foundation-test__header">
        <p className="foundation-test__eyebrow">Foundations · visuel test</p>
        <h1>H.C. Andersen Julekalender</h1>
      </header>

      <section
        className="foundation-test__section"
        aria-labelledby="brand-colors-title"
      >
        <h2 id="brand-colors-title">Brandfarver</h2>
        <div className="foundation-test__colors">
          {brandColors.map((color) => (
            <article className="foundation-test__color" key={color.className}>
              <div
                className={`foundation-test__swatch foundation-test__swatch--${color.className}`}
                role="img"
                aria-label={`${color.name}, ${color.value}`}
              />
              <h3>{color.name}</h3>
              <code>{color.value}</code>
            </article>
          ))}
        </div>
      </section>

      <section
        className="foundation-test__section"
        aria-labelledby="spacing-title"
      >
        <h2 id="spacing-title">Spacing-system</h2>
        <div className="foundation-test__spacing">
          {spacingValues.map((spacing) => (
            <div className="foundation-test__spacing-item" key={spacing.token}>
              <code>
                {spacing.token} · {spacing.value}
              </code>
              <span
                className={`foundation-test__spacing-sample foundation-test__spacing-sample--${spacing.className}`}
                aria-hidden="true"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default App
