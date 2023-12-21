// Components
import SectionEvents from '.'

// `forwardRef` error when dynamically importing a module in Next.js
// fix: wrap component in a custom component

export default function WrappedSectionEvents({ sectionEventsRef, ...props }) {
  return <SectionEvents {...props} ref={sectionEventsRef} />
}
