'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from './productModal'; // Import the modal component
import Image from 'next/image';
import ListSkeleton from './skeleton/listSkeleton';

const Product = () => {
  const [cupcakes, setCupcakes] = useState<any[]>([]);
  const [newCupcake, setNewCupcake] = useState<any>({
    id: '',
    name: '',
    price: 0,
    description: '',
    img: '',
    quantity: '',
  });
  const [showModal, setShowModal] = useState(false);
  const [selectedCupcakeId, setSelectedCupcakeId] = useState<string | null>(null);
  const [addModal, setAddModal] = useState(false);
  const [cupcakeLoading, setCupcakeLoading] = useState(false);

  const [floral, setFloral] = useState<any[]>([]);
  const [floralModal, setFloralModal] = useState(false);
  const [selectedFloralId, setSelectedFloralId] = useState<string | null>(null);
  const [addFloralModal, setAddFloralModal] = useState(false);
  const [newFloral, setNewFloral] = useState<any>({
    id: '',
    name: '',
    price: 0,
    description: '',
    image: '',
  });

  const [pastry, setPastry] = useState<any[]>([]);
  const [pastryModal, setPastryModal] = useState(false);
  const [selectedPastryId, setSelectedPastryId] = useState<string | null>(null);
  const [addPastryModal, setAddPastryModal] = useState(false);
  const [newPastry, setNewPastry] = useState<any>({
    id: '',
    name: '',
    price: 0,
    description: '',
    image: '',
  });

  const fetchCupcakes = async () => {
    setCupcakeLoading(true)
    await axios.get('/api/getCupcakes').then((res: any) => {
        if(res.status === 201){
            setCupcakes(res?.data)
        }
    })
    setCupcakeLoading(false)
};

  const fetchFloral = async () => {
    await axios.get('/api/getFloral').then((res: any) => {
        if(res.status === 201){
            setFloral(res?.data)
        }
    })
  };

  const fetchPastry = async () => {
    await axios.get('/api/getPastries').then((res: any) => {
        if(res.status === 201){
            setPastry(res?.data)
        }
    })
}

  useEffect(() => {
    fetchCupcakes();
    fetchFloral();
    fetchPastry();
  }, []);

  const handleDelete = (id: string) => {
    setSelectedCupcakeId(id);
    setShowModal(true);
  };

  const handleFloralDelete = (id: string) => {
    setSelectedFloralId(id);
    setFloralModal(true);
  };


  const confirmDelete = async () => {
    if (selectedCupcakeId) {
      try {
        // Send a DELETE request to the backend
        const response = await fetch(`/api/deleteCupcake?id=${selectedCupcakeId}`, {
          method: 'DELETE',
        });
  
        if (!response.ok) {
          throw new Error('Failed to delete cupcake');
        }
  
        // Remove the cupcake from the local state
        setCupcakes((prevCupcakes) => prevCupcakes.filter((cupcake) => cupcake.id !== selectedCupcakeId));
  
        setShowModal(false);
      } catch (error) {
        console.error('Error deleting cupcake:', error);
      }
    }
  };

  // floral deletion
  const confirmFloral = async () => {
    if (selectedFloralId) {
      try {
        // Send a DELETE request to the backend
        const response = await fetch(`/api/deleteFloral?id=${selectedFloralId}`, {
          method: 'DELETE',
        });
  
        if (!response.ok) {
          throw new Error('Failed to delete floral');
        }
  
        // Remove the cupcake from the local state
        setFloral((prevFloral) => prevFloral.filter((floral) => floral.id !== selectedFloralId));
  
        setFloralModal(false);
      } catch (error) {
        console.error('Error deleting floral:', error);
      }
    }
  };
  

  const handleAddCupcake = async () => {
    try {
      const response = await fetch('/api/postCupcake', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCupcake),
      });

      if (!response.ok) {
        throw new Error('Failed to add cupcake');
      }

      const addedCupcake = await response.json();

      setCupcakes((prevCupcakes) => [...prevCupcakes, addedCupcake]);

      setNewCupcake({
        id: '',
        name: '',
        price: 0,
        description: '',
        img: '',
        quantity: 0,
      });

      setAddModal(false); // Close the modal after adding
    } catch (error) {
      console.error('Error adding cupcake:', error);
    }
  };

  const handleAddFloral = async () => {
    try {
      const response = await fetch('/api/postFloral', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newFloral),
      });

      if (!response.ok) {
        throw new Error('Failed to add floral');
      }

      const addedFloral = await response.json();

      setFloral((prevFlorals) => [...prevFlorals, addedFloral]);

      setNewFloral({
        id: '',
        name: '',
        price: 0,
        description: '',
        img: '',
        quantity: 0,
      });

      setAddFloralModal(false); // Close the modal after adding
    } catch (error) {
      console.error('Error adding floral:', error);
    }
  };
  
  
  console.log(pastry)

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-indigo-900 mb-4">Product Manager</h1>
      <div className="mb-6 flex justify-start gap-3 items-center">
        <button
          className="mt-4 bg-indigo-600 text-white p-2 rounded-md"
          onClick={() => setAddModal(true)}
        >
          Add New Cupcake
        </button>
        <button
          className="mt-4 bg-indigo-600 text-white p-2 rounded-md"
          onClick={() => setAddFloralModal(true)}
        >
          Add New Floral
        </button>
        <button
          className="mt-4 bg-indigo-600 text-white p-2 rounded-md"
          onClick={() => setAddFloralModal(true)}
        >
          Add New Pastry
        </button>
      </div>
      <div className='w-full'>
       
        <h2 className="text-3xl font-semibold text-indigo-800 mb-2">Cupcake List</h2>
        <ul className="space-y-4">
        {cupcakeLoading && <ListSkeleton />}
          {!cupcakeLoading && cupcakes.map((cupcake) => (
            <li
              key={cupcake.id}
              className="flex items-center justify-between p-4 border rounded-md bg-white shadow-md"
            >
              <div className="flex items-center space-x-4">
                <Image width={200} height={200} src={cupcake.img} alt={cupcake.name} className="w-16 h-16 rounded-md" />
                <div>
                  <h3 className="text-lg font-semibold text-indigo-900">{cupcake.name}</h3>
                  <p className="text-gray-600">${cupcake.price}</p>
                </div>
              </div>
              <button
                className="bg-red-600 text-white p-2 rounded-md"
                onClick={() => handleDelete(cupcake.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-4xl mt-8 font-semibold text-indigo-800 mb-2">Floral List</h2>
        <ul className="space-y-4">
          {floral.map((f) => (
            <li
              key={f.id}
              className="flex items-center justify-between p-4 border rounded-md bg-white shadow-md"
            >
              <div className="flex items-center space-x-4">
                <Image width={200} height={200} src={f.image} alt={f.name} className="w-16 h-16 rounded-md" />
                <div>
                  <h3 className="text-lg font-semibold text-indigo-900">{f.name}</h3>
                  <p className="text-gray-600">${f.price}</p>
                </div>
              </div>
              <button
                className="bg-red-600 text-white p-2 rounded-md"
                onClick={() => handleFloralDelete(f.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
      {showModal && (
        <Modal
          title="Confirm Deletion"
          onConfirm={confirmDelete}
          onCancel={() => setShowModal(false)}
        >
          <p>Are you sure you want to delete this cupcake?</p>
        </Modal>
      )}

      {floralModal && (
              <Modal
                title="Confirm Deletion"
                onConfirm={confirmFloral}
                onCancel={() => setFloralModal(false)}
              >
                <p>Are you sure you want to delete this cupcake?</p>
              </Modal>
            )}

       {addModal && (
        <Modal
          title="Add New Cupcake"
          onConfirm={handleAddCupcake}
          onCancel={() => setAddModal(false)}
        >
          <div className="grid  grid-cols-1 gap-4  lg:grid-cols-1">
            <input
              type="text"
              placeholder="Name"
              className="p-2 border rounded-md"
              value={newCupcake.name}
              onChange={(e) => setNewCupcake({ ...newCupcake, name: e.target.value })}
            />
            <input
              type="number"
              placeholder="Price"
              className="p-2 border rounded-md"
              value={newCupcake.price}
              onChange={(e) => {
                const value = parseFloat(e.target.value);
                setNewCupcake({ ...newCupcake, price: isNaN(value) ? 0 : value });
              }}
              min="0"
            />
            <input
              type="text"
              placeholder="Description"
              className="p-2 border rounded-md"
              value={newCupcake.description}
              onChange={(e) => setNewCupcake({ ...newCupcake, description: e.target.value })}
            />
            <input
              type="text"
              placeholder="Image URL"
              className="p-2 border rounded-md"
              value={newCupcake.img}
              onChange={(e) => setNewCupcake({ ...newCupcake, img: e.target.value })}
            />
          </div>
        </Modal>
      )}

      {addFloralModal && (
              <Modal
                title="Add New Floral Arrangement"
                onConfirm={handleAddFloral}
                onCancel={() => setAddFloralModal(false)}
              >
                <div className="grid  grid-cols-1 gap-4  lg:grid-cols-1">
                  <input
                    type="text"
                    placeholder="Name"
                    className="p-2 border rounded-md"
                    value={newFloral.name}
                    onChange={(e) => setNewFloral({ ...newFloral, name: e.target.value })}
                  />
                  <input
                    type="number"
                    placeholder="Price"
                    className="p-2 border rounded-md"
                    value={newFloral.price}
                    onChange={(e) => {
                      const value = parseFloat(e.target.value);
                      setNewFloral({ ...newFloral, price: isNaN(value) ? 0 : value });
                    }}
                    min="0"
                  />
                  <input
                    type="text"
                    placeholder="Description"
                    className="p-2 border rounded-md"
                    value={newFloral.description}
                    onChange={(e) => setNewFloral({ ...newFloral, description: e.target.value })}
                  />
                  <input
                    type="text"
                    placeholder="Image URL"
                    className="p-2 border rounded-md"
                    value={newFloral.image}
                    onChange={(e) => setNewFloral({ ...newFloral, image: e.target.value })}
                  />
                </div>
              </Modal>
            )}
    </div>
  );
};

export default Product;
