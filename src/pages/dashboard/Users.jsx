import { useEffect, useState, useMemo } from "react";
import { fetchUsers } from "../../utils/mockApi";
import Table from "../../components/common/Table";
import Loader from "../../components/common/Loader";
import EmptyState from "../../components/common/EmptyState";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import Modal from "../../components/common/Modal";
import MultiStepUserForm from "../../components/common/MultiStepUserForm";
import DashboardLayout from "../../layouts/DashboardLayout";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [viewingUser, setViewingUser] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2; // Change as needed

  useEffect(() => {
    fetchUsers().then((data) => {
      setUsers(data);
      setLoading(false);
    });
  }, []);

  const filteredUsers = useMemo(() => {
    return users.filter(
      (u) =>
        u.name.toLowerCase().includes(search.toLowerCase()) ||
        u.email.toLowerCase().includes(search.toLowerCase()),
    );
  }, [users, search]);

  // Pagination logic
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const paginatedUsers = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredUsers.slice(start, start + itemsPerPage);
  }, [filteredUsers, currentPage]);

  const columns = useMemo(() => ["Name", "Email", "Role"], []);
  const data = useMemo(() => paginatedUsers, [paginatedUsers]);

  const handleAddUser = (user) => {
    if (selectedUser) {
      // Edit existing user
      setUsers((prev) =>
        prev.map((u) =>
          u.id === selectedUser.id ? { ...selectedUser, ...user } : u,
        ),
      );
    } else {
      // Add new user
      setUsers((prev) => [...prev, { ...user, id: prev.length + 1 }]);
    }
    setModalOpen(false);
    setSelectedUser(null);
  };

  const handleEdit = (user) => {
    setSelectedUser(user);
    setModalOpen(true);
  };

  const handleView = (user) => {
    setViewingUser(user);
    setViewModalOpen(true);
  };

  if (loading) {
    return (
      <DashboardLayout>
        <Loader />
      </DashboardLayout>
    );
  }

  if (!users.length) {
    return (
      <DashboardLayout>
        <EmptyState message="No users found" />
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="text-white">
        <div className="mb-6">
          <h1 className="text-3xl font-semibold text-white mb-2">
            Users Management
          </h1>
          <p className="text-indigo-300 text-sm">
            Manage and view all users in the system
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <Input
            placeholder="Search by name or email"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button onClick={() => setModalOpen(true)}>Add User</Button>
        </div>

        <div className="bg-slate-800 rounded-lg overflow-hidden">
          <Table
            columns={[...columns, "Actions"]}
            data={data.map((user) => ({
              ...user,
              actions: (
                <div className="flex gap-2">
                  <Button onClick={() => handleView(user)}>View</Button>
                  <Button onClick={() => handleEdit(user)}>Edit</Button>
                </div>
              ),
            }))}
          />
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={`px-4 py-2 rounded-lg transition-all ${
                currentPage === i + 1
                  ? "bg-indigo-500 text-white"
                  : "bg-[#333A5C] text-indigo-300 hover:bg-indigo-500 hover:text-white"
              }`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>

        {/* Add/Edit User Modal */}
        <Modal
          isOpen={modalOpen}
          onClose={() => {
            setModalOpen(false);
            setSelectedUser(null);
          }}
        >
          <h2 className="text-xl font-bold mb-4 text-white">
            {selectedUser ? "Edit User" : "Add User"}
          </h2>
          <MultiStepUserForm
            onSubmit={handleAddUser}
            initialData={selectedUser}
          />
        </Modal>

        {/* View User Modal */}
        <Modal
          isOpen={viewModalOpen}
          onClose={() => {
            setViewModalOpen(false);
            setViewingUser(null);
          }}
        >
          <h2 className="text-lg font-semibold mb-4 text-white">
            User Details
          </h2>

          {viewingUser && (
            <div className="space-y-4">
              <div className="border border-slate-700 rounded-md divide-y divide-slate-700">
                <div className="px-4 py-3">
                  <p className="text-slate-400 text-sm">Name</p>
                  <p className="text-white text-sm mt-1">{viewingUser.name}</p>
                </div>

                <div className="px-4 py-3">
                  <p className="text-slate-400 text-sm">Email</p>
                  <p className="text-white text-sm mt-1">{viewingUser.email}</p>
                </div>

                <div className="px-4 py-3">
                  <p className="text-slate-400 text-sm">Role</p>
                  <p className="text-white text-sm mt-1">{viewingUser.role}</p>
                </div>

                <div className="px-4 py-3">
                  <p className="text-slate-400 text-sm">User ID</p>
                  <p className="text-white text-sm mt-1">#{viewingUser.id}</p>
                </div>
              </div>

              <div className="flex justify-end">
                <Button
                  onClick={() => {
                    setViewModalOpen(false);
                    setViewingUser(null);
                  }}
                >
                  Close
                </Button>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </DashboardLayout>
  );
};

export default Users;
