import ArrowRightIcon from '@material-ui/icons/ArrowRight'

const Breadcrumbs = ({ page }) => (
  <div className='flex justify-center mt-4 lg:justify-start lg:ml-4'>
    <a href='/#projects'>Projects</a><ArrowRightIcon /><span className='font-bold'>{page}</span>
  </div>
)

export default Breadcrumbs
