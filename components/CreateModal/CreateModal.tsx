import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

import Input from './Input';
import Header from './Header';
import Footer from './Footer';
import TextArea from './TextArea';
import { Category, Location } from '../../types';
import Select from './Select';
import { categoryOptions, locationOptions } from '../Filters/consts';
import Checkbox from './Checkbox';
import DatePicker from './DatePicker';
import BoolButton from '../Filters/BoolButton';
import { animalMap, animals } from './consts';

type FormInputs = {
  title: string;
  description: string;
  infoUrl: string;
  location: Location;
  isOnline: boolean;
  date: string;
  price: string;
  animal: string;
};

type Props = {
  onClose: () => void;
};

function CreateModal(props: Props) {
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
  const [isAnimalError, setIsAnimalError] = useState(false);

  const animal = useRef(
    animalMap[Math.floor(Math.random() * animalMap.length)]
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  function selectCategory(cat: Category) {
    if (selectedCategories.some((c) => c === cat)) {
      setSelectedCategories([...selectedCategories.filter((sc) => sc !== cat)]);
      return;
    }

    if (selectedCategories.length < 3) {
      setSelectedCategories([...selectedCategories, cat]);
    } else {
      setSelectedCategories([...selectedCategories.slice(1), cat]);
    }
  }

  const onSubmitHandler = (data: FormInputs) => {
    if (data.animal !== animal.current.title) {
      setIsAnimalError(true);
      return;
    }

    props.onClose();
    // console.log({ data });
  };

  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
      onClick={props.onClose}
    >
      <div className="fixed inset-0 bg-nabifli-black bg-opacity-90 transition-opacity"></div>

      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative rounded-md text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-2xl sm:w-full ring-2 ring-offset-1 ring-offset-purple-700 ring-purple-600"
          >
            <Header />

            <div className="bg-nabifli-black px-2 py-3 sm:px-4">
              <form>
                <Input
                  error={errors.title?.type}
                  id="firstname"
                  inputProps={register('title', {
                    required: true,
                    maxLength: 65,
                  })}
                  label="Název události"
                  maxLength={65}
                />
                <TextArea
                  error={errors.description?.type}
                  id="description"
                  inputProps={register('description', {
                    required: true,
                    maxLength: 230,
                  })}
                  label="Popis"
                  maxLength={230}
                />
                <div className="flex">
                  <div>
                    <Select
                      id="location"
                      inputProps={register('location')}
                      label="Místo konání"
                      options={locationOptions}
                    />
                  </div>
                  <div>
                    <Checkbox
                      id="isOnline"
                      inputProps={register('isOnline')}
                      label="Online akce"
                    />
                  </div>
                </div>
                <DatePicker
                  error={errors.date?.type}
                  id="date"
                  inputProps={register('date', {
                    required: true,
                  })}
                  label="Datum konání"
                />
                <Input
                  error={errors.infoUrl?.type}
                  id="infoUrl"
                  inputProps={register('infoUrl', {
                    required: true,
                    maxLength: 200,
                  })}
                  label="Webová stránka"
                  maxLength={200}
                  placeholder="https://example.com"
                />
                <Input
                  error={errors.price?.type}
                  id="price"
                  inputProps={register('price', {
                    required: true,
                    maxLength: 20,
                  })}
                  label="Cena"
                  maxLength={20}
                  placeholder="zdarma"
                />
                <Select
                  id="animal"
                  inputProps={register('animal')}
                  isError={isAnimalError}
                  label={
                    <>
                      Jaké zvíře{' '}
                      <span className="text-2xl">{animal.current.icon}</span> je
                      na obrázku?
                    </>
                  }
                  onChange={() => setIsAnimalError(false)}
                  options={animals}
                />
                {isAnimalError && (
                  <p className="ml-3 text-red-600 mb-2">
                    ⚠ Vybrané zvíře neodpovídá obrázku
                  </p>
                )}
              </form>
              <p className="text-white text-sm ml-3 mb-1">Kategorie (max. 3)</p>
              {categoryOptions.map((c) => (
                <BoolButton
                  key={c}
                  isSelected={selectedCategories.some((sc) => sc === c)}
                  onClick={() => selectCategory(c)}
                  title={c}
                />
              ))}
              <Footer
                onClose={props.onClose}
                onSubmitClick={handleSubmit(onSubmitHandler)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateModal;
