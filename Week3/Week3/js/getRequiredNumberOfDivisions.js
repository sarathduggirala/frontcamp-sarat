export default function getRequiredNumberOfDivisions(
  divisionsPresentOnUI,
  divisionsRequiredFromApiResponse
) {
  let required = divisionsRequiredFromApiResponse.length;
  return divisionsPresentOnUI - required;
}
