import React, { PureComponent } from 'react';
import { useEffect } from 'react';
import { useHistory } from "react-router-dom";

export default function DefaultPage() {
  const router = useHistory();

  useEffect(() => {
    router.push('/dashboard');
  }, []);

  return null;
}
