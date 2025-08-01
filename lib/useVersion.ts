import { useState, useEffect } from 'react';

export const useVersion = () => {
  const [version, setVersion] = useState<string>('0.1.9');

  useEffect(() => {
    // Usa a versão injetada pelo Next.js durante o build
    const packageVersion = process.env.NEXT_PUBLIC_APP_VERSION || '0.1.9';
    setVersion(packageVersion);
  }, []);

  return version;
};

// Função utilitária para obter informações de build
export const getBuildInfo = () => {
  return {
    version: process.env.NEXT_PUBLIC_APP_VERSION || '0.1.9',
    buildDate: new Date().toLocaleDateString('pt-BR'),
    environment: process.env.NODE_ENV || 'development'
  };
};