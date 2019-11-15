require "rails_helper"

describe Reward do
    describe "Validations" do
        let(:admin) {Administrator.new(username: "john", password: "password",
            name: "John Smith", points: 0, email:"johnsmith@gmail.com")}
        subject {Reward.new(points_cost: 100, name: "Toy", administrator: admin)}
        it "is valid with valid attributes" do
            expect(subject).to be_valid
        end
        it "is not valid without a name" do
            subject.name = nil
            expect(subject).to_not be_valid
        end
        it "is not valid without a points cost" do
            subject.points_cost = nil
            expect(subject).to_not be_valid
        end
        it "is not valid with a zero points cost" do
            subject.points_cost = 0
            expect(subject).to_not be_valid
        end
        it "is not valid with a negative points cost" do
            subject.points_cost = -1
            expect(subject).to_not be_valid
        end
    end

    describe "Associations" do
        it "belongs to an administrator" do
            assc = Reward.reflect_on_association(:administrator)
            expect(assc.macro).to eq :belongs_to
        end
    end
end
