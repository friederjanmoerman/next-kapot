// Components
import SectionLearn from '.'

// `forwardRef` error when dynamically importing a module in Next.js
// fix: wrap component in a custom component

export default function WrappedSectionLearn({ sectionLearnRef, ...props }) {
  return <SectionLearn {...props} ref={sectionLearnRef} />
}
