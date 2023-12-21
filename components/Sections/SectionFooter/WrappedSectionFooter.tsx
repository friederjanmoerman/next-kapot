// Components
import Footer from '.'

// `forwardRef` error when dynamically importing a module in Next.js
// fix: wrap component in a custom component

export default function WrappedSectionLearn({ sectionFooterRef, ...props }) {
  return <Footer {...props} ref={sectionFooterRef} />
}
