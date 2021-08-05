import { Ref, useCallback } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';
import { Food } from '../../types/food';
import { FormHandles } from '@unform/core';

interface ModalEditFoodProps {
  isOpen: boolean;
  handleUpdateFood: (food: Food) => void
  setIsOpen: () => void;
  editingFood: Food | undefined;
}

const ModalEditFoodComponent = ({ isOpen, handleUpdateFood, setIsOpen, editingFood }: ModalEditFoodProps) => {

  const formRef: undefined | Ref<FormHandles> = useCallback((ref) => {
    if(ref !== null)
      return ref;
  }, [])

  const handleSubmit = async (food: Food) => {
    handleUpdateFood(food);
    setIsOpen();
  };

    return (
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
          <h1>Editar Prato</h1>
          <Input name="image" placeholder="Cole o link aqui" />

          <Input name="name" placeholder="Ex: Moda Italiana" />
          <Input name="price" placeholder="Ex: 19.90" />

          <Input name="description" placeholder="Descrição" />

          <button type="submit" data-testid="edit-food-button">
            <div className="text">Editar Prato</div>
            <div className="icon">
              <FiCheckSquare size={24} />
            </div>
          </button>
        </Form>
      </Modal>
    );
  }

export default ModalEditFoodComponent;
