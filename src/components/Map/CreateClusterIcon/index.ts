import L from 'leaflet';

const CreateClusterIcon = (cluster) => {
  const count = cluster.getChildCount();
  let size = 'LargeXL';

  if (count < 10) {
    size = 'Small';
  }
  else if (count >= 10 && count < 100) {
    size = 'Medium';
  }
  else if (count >= 100 && count < 500) {
    size = 'Large';
  }

  return L.divIcon({
    html:
      `<div class="clusterContainer">
        <span class="markerClusterLabel">${count}</span>
      </div>`,
    className: `markerCluster${size}`,
  });
};

export default CreateClusterIcon;
