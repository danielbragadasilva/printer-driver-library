import { useState, useEffect } from 'react';

export const useVersion = () => {
  const [version, setVersion] = useState<string>('0.1.8');

  useEffect(() => {
    // Em produção, a versão será injetada durante o build
    // Por enquanto, usamos a versão do package.json como fallback
    const packageVersion = process.env.NEXT_PUBLIC_APP_VERSION || '0.1.8';
    setVersion(packageVersion);
  }, []);

  return version;
};

// Função utilitária para obter informações de build
export const getBuildInfo = () => {
  return {
    version: '0.1.8',
    buildDate: new Date().toLocaleDateString('pt-BR'),
    environment: process.env.NODE_ENV || 'development'
  };
};