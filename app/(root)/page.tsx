
import ProductList from '@/components/product/product-list';
import sampleData from '@/db/sample-data';

const Homepage = () => {
  console.log(sampleData);
  return <>
    <ProductList data={sampleData}  title='Newest arrival' ></ProductList>
  </>;
}
 
export default Homepage;