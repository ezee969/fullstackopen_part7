import { useEffect, useState } from 'react';
import axios from 'axios';

export const useField = (type) => {
  const [value, setValue] = useState('');

  const onChange = (event) => {
    setValue(event.target.value);
  };

  return {
    type,
    value,
    onChange,
  };
};

export const useResource = (baseUrl) => {
  const [resources, setResources] = useState([]);

  const create = async (resource) => {
    const response = await axios.post(baseUrl, resource);
    const { data } = response;
    setResources(resources.concat(data));
  };

  const getAll = async () => {
    const response = await axios.get(baseUrl);
    const { data } = response;
    setResources((r) => data);
  };

  useEffect(() => {
    getAll();
  }, []);

  const service = {
    create,
  };

  return [resources, service];
};
