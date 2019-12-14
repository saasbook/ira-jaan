require "rails_helper"

describe Administrator do
    describe "Validations" do
        subject { Administrator.new(username: "john", password: "password",
            name: "John Smith", points: 0, email:"johnsmith@gmail.com",
            admin_type: "Teacher") }
        it "is valid with valid attributes" do
            expect(subject).to be_valid
        end
        it "is not valid without a username" do
            subject.username = nil
            expect(subject).to_not be_valid
        end
        it "is not valid without a password" do
            subject.password = nil
            expect(subject).to_not be_valid
        end
        it "is not valid without a name" do
            subject.name = nil
            expect(subject).to_not be_valid
        end
        it "is not valid without points" do
            subject.points = nil
            expect(subject).to_not be_valid
        end
        it "is not valid without an email" do
            subject.email = nil
            expect(subject).to_not be_valid
        end
        it "is not valid without an admin type" do
            subject.admin_type = nil
            expect(subject).to_not be_valid
        end
        it "is not valid with negative points" do
            subject.points = -1
            expect(subject).to_not be_valid
        end
    end

    describe "Associations" do
        it "has many connections" do
            assc = Administrator.reflect_on_association(:connections)
            expect(assc.macro).to eq :has_many
        end
        it "has many children" do
            assc = Administrator.reflect_on_association(:children)
            expect(assc.macro).to eq :has_many
        end
        it "has many activities" do
            assc = Administrator.reflect_on_association(:activities)
            expect(assc.macro).to eq :has_many
        end
        it "has many rewards" do
            assc = Administrator.reflect_on_association(:rewards)
            expect(assc.macro).to eq :has_many
        end
    end
end
