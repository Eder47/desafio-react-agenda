import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from '../common/Modal/Modal';
import { Input } from '../common/Input/Input';
import { Textarea } from '../common/Textarea/Textarea';
import { Button } from '../common/Button/Button';
import { createUser } from '../../store/actions/userActions';
import { closeAddUserModal } from '../../store/actions/uiActions';
import { RootState } from '../../store';
import styles from './AddUserModal.module.css';


export const AddUserModal: React.FC = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.ui.isAddUserModalOpen);
  const { currentPage, itemsPerPage, loading } = useSelector((state: RootState) => state.users);

  const [formData, setFormData] = useState({
    photo: '',
    name: '',
    description: '',
  });

  const [errors, setErrors] = useState({
    photo: '',
    name: '',
    description: '',
  });


  const validateForm = (): boolean => {
    const newErrors = {
      photo: '',
      name: '',
      description: '',
    };

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'La descripción es requerida';
    }

    if (formData.photo && !isValidUrl(formData.photo)) {
      newErrors.photo = 'Ingrese una URL válida';
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error !== '');
  };

  const isValidUrl = (url: string): boolean => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    dispatch(createUser(formData, currentPage, itemsPerPage) as any);
    handleClose();
  };


  const handleClose = () => {
    setFormData({
      photo: '',
      name: '',
      description: '',
    });
    setErrors({
      photo: '',
      name: '',
      description: '',
    });
    dispatch(closeAddUserModal());
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title="Agregar nuevo Contacto">
      <form onSubmit={handleSubmit} className={styles.form}>
        <Input
          label="URL imagen de Perfil"
          value={formData.photo}
          onChange={(value) => setFormData({ ...formData, photo: value })}
          placeholder="Inserte la URL de la imagen de perfil"
          type="url"
          error={errors.photo}
        />

        <Input
          label="Nombre"
          value={formData.name}
          onChange={(value) => setFormData({ ...formData, name: value })}
          placeholder="Escriba el nombre de contacto"
          required
          error={errors.name}
        />

        <Textarea
          label="Descripción"
          value={formData.description}
          onChange={(value) => setFormData({ ...formData, description: value })}
          placeholder="Agregue la descripción del contacto"
          required
          rows={5}
          error={errors.description}
        />

        <div className={styles.buttons}>
          <Button variant="secondary" onClick={handleClose} type="button">
            Cancelar
          </Button>
          <Button variant="primary" type="submit" disabled={loading}>
            Guardar
          </Button>
        </div>
      </form>
    </Modal>
  );
};
