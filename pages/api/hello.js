// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import vision from '@google-cloud/vision';

export default async function handler(req, res) {
  const client = new vision.ImageAnnotatorClient();
  const fileName =
    'C:\\Users\\MSI\\Desktop\\workout-gym-next\\public\\favicon.ico';
  const [result] = await client.imageProperties(fileName);
  const colors = result.imagePropertiesAnnotation.dominantColors.colors;
  colors.forEach((color) => console.log(color));
  res.status(200).json({ name: 'ass' });
}
