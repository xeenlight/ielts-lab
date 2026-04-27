import styles from './ModalForm.module.css';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function ModalForm({ isOpen, onClose }) {
  const { t } = useTranslation();

  const [form, setForm] = useState({
    name: '',
    phone: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.phone) {
      alert('Fill all fields');
      return;
    }

await fetch('http://localhost:5000/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    alert(t('form_success'));
    setForm({ name: '', phone: '' });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
      >
        <h3>{t('form_title')}</h3>

        <form onSubmit={handleSubmit}>
          
          <input
            placeholder={t('form_name')}
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />

          <input
            placeholder={t('form_phone')}
            value={form.phone}
            onChange={(e) =>
              setForm({ ...form, phone: e.target.value })
            }
          />

          <button type="submit">
            {t('form_btn')}
          </button>
        </form>

      </div>
    </div>
  );
}