import { useState } from 'react';
import { generateContent } from '../utils/contentGenerator';

export function useGenerator(defaultType: string = 'puns') {
  const [topic, setTopic] = useState('');
  const [type] = useState(defaultType);
  const [content, setContent] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();

  const handleGenerate = async () => {
    setLoading(true);
    setError(undefined);
    try {
      const generatedContent = await generateContent(topic, type);
      setContent(generatedContent);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return {
    topic,
    type,
    content,
    loading,
    error,
    setTopic,
    handleGenerate
  };
}